import { notification } from 'antd';

const defaultNotification = {
  placement: 'topRight',
  duration: 3
};

export const showSuccessNotification = () => {
  notification.success({
    ...defaultNotification,
    message: 'Temperatura obtida com sucesso!',
  });
};

export const showFailureNotification = () => {
  notification.error({
    ...defaultNotification,
    message: 'Não foi possível obter a temperatura',
  });
};

export const showWarningNotification = () => {
  notification.warning({
    ...defaultNotification,
    message: 'A temperatura foi obtida, mas não foi possível arquivá-la',
  });
};
