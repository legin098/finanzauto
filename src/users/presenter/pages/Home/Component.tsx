import React, {Fragment, useState} from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './styles';
import {Button} from '@src/common/presenter/components';
import {PropsComponent as Props} from './models';
import {CardUser, ModalAddUser, ModalUserDetail} from '../../components';
import {USER_INITAL_VALUE} from '../../constants';
import {UserEntity} from '@src/users/domain/models';

const Component = ({
  listUser = [],
  userDetail = USER_INITAL_VALUE,
  onSubmit,
  onFetchMore,
  onDeleteUser,
  onGetUserById,
}: Props) => {
  const [isVisibleModalDetail, setIsVisibleModalDetail] = useState(false);
  const [isVisibleModalAdd, setIsVisibleModalAdd] = useState(false);

  const handleGetUserDetail = (id: string) => {
    onGetUserById(id);
    setIsVisibleModalDetail(true);
  };

  const handleDeleteUser = async (id: string) => {
    onDeleteUser(id);
    setIsVisibleModalDetail(false);
  };

  return (
    <Fragment>
      <ModalAddUser
        isVisible={isVisibleModalAdd}
        onClose={() => setIsVisibleModalAdd(false)}
        onSubmit={onSubmit}
      />
      <ModalUserDetail
        isVisible={isVisibleModalDetail}
        user={userDetail}
        onClose={() => setIsVisibleModalDetail(false)}
        onDelete={() => handleDeleteUser(userDetail.id)}
      />
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.ctnFlatList}
          showsVerticalScrollIndicator={false}
          maxToRenderPerBatch={10 * 2}
          initialNumToRender={10}
          removeClippedSubviews={true}
          data={listUser}
          keyExtractor={item => `${item.id}-user`}
          renderItem={({item}) => (
            <CardUser
              user={item}
              onPress={() => handleGetUserDetail(item.id)}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          onEndReachedThreshold={0.85}
          onEndReached={onFetchMore}
        />
        <Button
          containerStyles={styles.ctnButton}
          text="+ Add User"
          onPress={() => setIsVisibleModalAdd(true)}
        />
      </View>
    </Fragment>
  );
};

export default Component;
