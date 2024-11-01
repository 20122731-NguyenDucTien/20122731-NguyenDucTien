import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput, ActivityIndicator, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';

// Các hằng số cho các hành động
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Các hành động
const loginRequest = (username, password) => ({ type: LOGIN_REQUEST, payload: { username, password } });
const loginSuccess = user => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = error => ({ type: LOGIN_FAILURE, payload: error });

// Trạng thái khởi tạo
const initialState = { user: null, loading: false, error: null };

// Reducer để xử lý các hành động
function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

// Hàm giả lập gọi API đăng nhập
function loginApi(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === '1') {
        resolve({ id: 1, name: 'John Doe', username: 'user' });
      } else {
        reject('Tên đăng nhập hoặc mật khẩu không hợp lệ');
      }
    }, 1000);
  });
}

// Saga để xử lý đăng nhập
function* loginSaga(action) {
  try {
    const user = yield call(loginApi, action.payload.username, action.payload.password);
    yield put(loginSuccess(user));
  } catch (error) {
    yield put(loginFailure(error));
  }
}

// Gốc của saga
function* rootSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}

// Cấu hình store với middleware saga
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

// Thành phần chính của ứng dụng
function LoginApp() {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector(state => state);
  const [username, setUsername] = useState('');
  const [search, setSearch] = useState('');

  // Danh sách nhiệm vụ mẫu
  const tasks = [
    { id: '1', title: 'Kiểm tra email', completed: true },
    { id: '2', title: 'Thiết kế giao diện web', completed: true },
    { id: '3', title: 'Học JavaScript cơ bản', completed: true },
    { id: '4', title: 'Học HTML nâng cao', completed: true },
    { id: '5', title: 'Giao diện ứng dụng y tế', completed: true },
    { id: '6', title: 'Học Java', completed: true },
  ];

  // Hàm xử lý đăng nhập
  const handleLogin = () => {
    dispatch(loginRequest(username,));
  };

  // Hàm render cho danh sách nhiệm vụ
  const renderTask = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      {loading && (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text> Đang đăng nhập...</Text>
        </View>
      )}
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      {user ? (
        <View style={{ flex: 1 }}>
          <Ionicons name="arrow-back" size={24} color="black" />
          <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10 }}>
            <Ionicons name="search-sharp" size={24} color="black" />
            <TextInput
              placeholder="TÌM KIẾM"
              value={search}
              onChangeText={setSearch}
              style={{ flex: 1, borderBottomWidth: 1, marginLeft: 0, color: 'gray', paddingHorizontal: 10 }}
            />
          </View>
          <FlatList
            data={tasks}
            renderItem={renderTask}
            keyExtractor={item => item.id}
          />
        </View>
      ) : (
        <>
          <Image
            source={{ uri: 'https://s3-alpha-sig.figma.com/img/4d17/f963/f6ee0953600008083c32857b2d79ab5e?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d8qWywpZima0aHJnKXIU0OEcMND6Mpc84ygHesDXf~dV0WMfKCl-pIlh5I43~ymYA5IsMFfJZU3Y0CCNRH~01MQLMhU8RsO~moXMk6rhxsHHdlyYX2xjk2fkWHg5eJgrRzLrmOUYNf8pl17boqwxjB2nOMFPGEmCOQWSgF4n0t7ZC8mmtShI7d8uWmCBMJRLJmCOLgzIlWDXYjw~GR5rgSN67YJdpAoFz9EGQpadXbXFTnIaT-3vhuZ8wSocFaWjar06G7Yi90fHeLFOzIv1HRm68qYxhULCpJBXe-UbJ2cOvI44IkXalpnxjptkgD56MQn09FhWPjjiYeZ7inFg6g__' }}
            style={styles.icon}
          />
          <Text>MANAGE YOUR TASK</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Feather name="mail" size={24} color="gray" />
            <TextInput
              placeholder="enter your name"
              value={username}
              onChangeText={setUsername}
              style={{ flex: 1, borderBottomWidth: 1, marginLeft: 0, color: 'gray', paddingHorizontal: 10 }}
            />
          </View>
          
          <Button title="get started ->" onPress={handleLogin} />
        </>
      )}
    </View>
  );
}

// Các kiểu dáng
const styles = StyleSheet.create({
  icon: {
    width: 220,
    height: 220,
  },
});

// Thành phần gốc
export default function Root() {
  return (
    <Provider store={store}>
      <LoginApp />
    </Provider>
  );
}
