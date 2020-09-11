import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';
import fetchData from './usersAction';
import User from './User/User';
import { AppStateType } from '../../redux/redux';
import ModalAlert from '../../helpers/ModalAlert';
import { IUser } from '../../interfaces/interfaces';

const Users: React.FC<PropTypes> = ({
  users,
  fetchData,
  isFetching,
  error,
}) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handlePress = (id: number) => {
    Alert.alert(String(id));
  };

  const usersList = users.map((user) => (
    <User
      avatar={user.avatar}
      first_name={user.first_name}
      last_name={user.last_name}
      email={user.email}
      key={user.id}
      id={user.id}
      handlePress={handlePress}
    />
  ));

  return (
    <SafeAreaView style={styles.users}>
      <ScrollView>{usersList}</ScrollView>
      {isFetching && (
        <ActivityIndicator
          size='large'
          style={styles.preloader}
          color='#ffffff'
        />
      )}
      {!!error && <ModalAlert message={error} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  users: {
    flex: 1,
    alignItems: 'center',
  },
  preloader: {
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
  },
});

type mapStateType = {
  users: Array<IUser>;
  isFetching: boolean;
  error: string;
};

type mapDispatchType = {
  fetchData: () => void;
};

type PropTypes = mapStateType & mapDispatchType;

const mapStateToProps = ({
  app: { users, isFetching, error },
}: AppStateType): mapStateType => ({
  users,
  isFetching,
  error,
});

export default connect<mapStateType, mapDispatchType, unknown, AppStateType>(
  mapStateToProps,
  { fetchData }
)(Users);
