import { useState } from 'react';
import { useSelector } from 'react-redux';

type StorageObject<ItemType> = {
  item: ItemType;
  expiryDate: Date | null;
  userGuid: string | null;
};

const calculateExpiryDate = (lifespanInDays: number) => {
  const date = new Date();
  date.setDate(date.getDate() + lifespanInDays);
  return date;
};

const useBrowserStorage = <ItemType>(storage: Storage, key: string) => {
  // const user = useSelector(selectAuthenticatedUser);
  const [storageObject, setStorageObject] = useState<StorageObject<ItemType | null> | null>(() => {
    const storageObjectStringified = storage.getItem(key);

    if (!Boolean(storageObjectStringified)) return null;

    const storageObject = JSON.parse(storageObjectStringified!) as StorageObject<ItemType>;
    return storageObject;
  });

  const setItem = (newItem: ItemType | null, lifespanInDays?: number) => {
    const expiryDate = Boolean(lifespanInDays) ? calculateExpiryDate(lifespanInDays!) : null;

    const newStorageObject: StorageObject<ItemType | null> = {
      item: newItem,
      expiryDate,
      // userGuid: user?.userGuid ?? null,
      userGuid: null, // TODO
    };

    const newObjectStringified = JSON.stringify(newStorageObject);
    storage.setItem(key, newObjectStringified);
    setStorageObject(newStorageObject);
  };

  const getItem = () => {
    const isExpired =
      Boolean(storageObject?.expiryDate) && new Date(storageObject!.expiryDate!) < new Date();

    if (isExpired) {
      storage.removeItem(key);
      setStorageObject(null);
      return null;
    }

    const isOtherUser =
      // Boolean(storageObject?.userGuid) && storageObject!.userGuid !== user?.userGuid;
      false;

    if (isOtherUser) {
      setStorageObject(null);
      return null;
    }

    return storageObject?.item;
  };

  return { getItem, setItem };
};

export { useBrowserStorage };
