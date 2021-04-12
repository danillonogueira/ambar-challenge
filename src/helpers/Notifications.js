import { notification, Button } from 'antd';

const defaultNotification = {
  placement: 'topRight',
  duration: 3
};

export const showSuccessNotification = () => {
  notification.success({
    ...defaultNotification,
    message: 'Informações obtidas com sucesso!',
  });
};

export const showFailureNotification = () => {
  notification.error({
    ...defaultNotification,
    message: 'Não foi possível obter as informações',
  });
};

export const showWarningNotification = () => {
  notification.warning({
    ...defaultNotification,
    message: 'As informações foram obtidas, mas não foi possível arquivá-las',
  });
};

export const showUpdateNotification = () => {
  const key = `open${Date.now()}`;
  const btn = (
    <Button 
      type="primary" 
      size="small" 
      onClick={() => {notification.close(key)}}
    >
      Atualizar
    </Button>
  );

  notification.warning({
    ...defaultNotification,
    message: 'Existem informações novas. Deseja atualizar?',
    key,
    btn
  });
};
