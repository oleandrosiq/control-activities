import { useEffect, ReactNode } from 'react';
import { useContext, createContext, useState } from 'react';
import toast from 'react-hot-toast';
import { api } from '../services/api';

interface ActivityProviderProps {
  children: ReactNode;
}

interface ActivityContextData {
  activities: Activity[];
  allActivities: Activity[];
  createActivity: (activityInput: ActivityInput) => Promise<void>;
  updateActivity: (dataUpdatedActivity) => Promise<void>;
  deleteActivity: (activityId: string) => Promise<void>;
  filterActivity: (option: string) => void;
}

interface Activity {
  _id: string;
  name: string;
  date: string;
  description: string;
  status: string;
}

type ActivityInput = Omit<Activity, '_id' | 'status' | 'date'>;

interface UpdateActivityProps {
  id: string;
  status: string;
}

type OrderListActivitiesProps = Activity[];

const ActivityContext = createContext<ActivityContextData>({} as ActivityContextData);

export function ActivityProvider({ children }: ActivityProviderProps) {
  const [activities, setActivities] = useState([]);
  const [allActivities, setAllActivities] = useState([]);
  
  useEffect(() => {
    api.get('/activity')
    .then(response => {
      const activitiesApi = response.data.activities;
      const activitiesOrder = orderListActivities(activitiesApi);
      setActivities(activitiesOrder);
      setAllActivities(activitiesOrder);
    });
  }, []);

  async function createActivity(activityInput: ActivityInput) {
    const response = await api.post('/activity', {
      ...activityInput,
      date: new Date(),
      status: 'pending',
    });
    
    const { activity } = response.data;

    const updatedActivities = [...activities, activity];

    setActivities(orderListActivities(updatedActivities));
    setAllActivities(orderListActivities(updatedActivities));
  }

  async function updateActivity(dataUpdatedActivity: UpdateActivityProps) {
    const { id, status } = dataUpdatedActivity;

    await api.put(`/activity/${id}`, { status });

    const updatedActivities = activities.map(activity => {
      if (activity._id === id) {
        activity.status = status;
      }

      return activity;
    });

    setActivities(orderListActivities(updatedActivities));
    setAllActivities(orderListActivities(updatedActivities));
  }

  async function deleteActivity(activityId: string) {
    try {
      await api.delete(`/activity/${activityId}`);

      const updatedActivities = [...activities];
      const activityIndex = updatedActivities.findIndex(activity => activity._id === activityId);

      if (activityIndex >= 0) {
        updatedActivities.splice(activityIndex, 1);

        setActivities(orderListActivities(updatedActivities));
        setAllActivities(orderListActivities(updatedActivities));
      } else {
        throw new Error();
      }
    } catch  {
      toast('Erro na exclusão da atividade', {
        style: {
          background: '#303034',
          color: '#e52e40',
        },
        icon: '😰',
      });
    }
  }

  function orderListActivities(listActivities: OrderListActivitiesProps) {
    const filterListOrder = listActivities.reduce((acc, activity) => {
      switch (activity.status) {
        case 'pending':
          acc.pending.push(activity);
          break;
        case 'completed':
          acc.completed.push(activity);
          break;
        case 'canceled':
          acc.canceled.push(activity);
          break;
      }

      return acc;
    }, {
      pending: [],
      completed: [],
      canceled: [],
    });

    const listActivitiesOrder = [
      ...filterListOrder.pending.reverse(),
      ...filterListOrder.completed,
      ...filterListOrder.canceled,
    ];


    return listActivitiesOrder;
  }

  function filterActivity(option: string) {
    const filterActivities = [...allActivities];

    const filteredActivities = filterActivities.reduce((acc, activity) => {
      switch (activity.status) {
        case 'pending':
          acc.pending.push(activity);
          break;
        case 'completed':
          acc.completed.push(activity);
          break;
        case 'canceled':
          acc.canceled.push(activity);
          break;
      }

      return acc;
    }, {
      pending: [],
      completed: [],
      canceled: [],
    });

    if (option === 'all') {
      setActivities(allActivities);
    } else {
      setActivities(filteredActivities[option]);
    }
  }

  return (
    <ActivityContext.Provider value={{ 
      activities, 
      allActivities,
      createActivity, 
      updateActivity,
      deleteActivity,
      filterActivity,
    }}>
      {children}
    </ActivityContext.Provider>
  );
}

export function useActivities() {
  const context = useContext(ActivityContext);

  return context;
}