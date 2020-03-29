import React from 'react';
import {StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {
  Icon,
  Layout,
  OverflowMenu,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';

const BackIcon = style => <Icon {...style} name="arrow-back" />;

const MenuIcon = style => <Icon {...style} name="more-vertical" />;

const InfoIcon = style => <Icon {...style} name="info" />;

const LogoutIcon = style => <Icon {...style} name="log-out" />;

export default () => {
  const mediaReducer = useSelector(state => state.media);

  const [menuVisible, setMenuVisible] = React.useState(false);

  const menuData = [
    {
      title: 'About',
      icon: InfoIcon,
    },
    {
      title: 'Logout',
      icon: LogoutIcon,
    },
  ];

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const onMenuItemSelect = index => {
    // Handle Item Select

    setMenuVisible(false);
  };

  const renderMenuAction = () => (
    <OverflowMenu
      visible={menuVisible}
      data={menuData}
      onSelect={onMenuItemSelect}
      onBackdropPress={toggleMenu}>
      <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
    </OverflowMenu>
  );

  const renderBackAction = () => <TopNavigationAction icon={BackIcon} />;

  return (
    <Layout style={styles.container}>
      {mediaReducer === 'large' ? (
        <TopNavigation
          title="Application Title"
          leftControl={renderBackAction()}
          rightControls={renderMenuAction()}
        />
      ) : (
        <TopNavigation
          title="Application Title"
          leftControl={renderBackAction()}
          rightControls={renderMenuAction()}
        />
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 192,
  },
});

// import React from 'react';
// import {Icon, TopNavigation, TopNavigationAction} from '@ui-kitten/components';

// const BackIcon = style => <Icon {...style} name="arrow-back" />;

// const EditIcon = style => <Icon {...style} name="edit" />;

// const MenuIcon = style => <Icon {...style} name="more-vertical" />;

// // const BackAction = props => <TopNavigationAction {...props} icon={BackIcon} />;

// const EditAction = props => <TopNavigationAction {...props} icon={EditIcon} />;

// const MenuAction = props => <TopNavigationAction {...props} icon={MenuIcon} />;

// export default () => {
//   // const onBackPress = () => {};

//   // const renderLeftControl = () => <BackAction onPress={onBackPress} />;

//   const renderRightControls = () => [<EditAction />, <MenuAction />];

//   return (
//     <TopNavigation
//       title="Application Logo"
//       // leftControl={}
//       rightControls={renderRightControls()}
//     />
//   );
// };
