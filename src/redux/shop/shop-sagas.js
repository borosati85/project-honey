import { takeEvery, call, put, all } from 'redux-saga/effects';
import ShopActionTypes from './shop-types';
import { firestore } from '../../firebase/firebase.utils';
import { fetchSuppliesSuccess, fetchSuppliesFailure } from './shop-actions';
import { collection, getDocs } from 'firebase/firestore';

export function* fetchSuppliesAsync() {
    try {
        const collectionRef = collection(firestore, 'supplies');            
        const snapshot = yield getDocs(collectionRef);
        const honeySupplies = yield snapshot.docs[0].data();
        yield put(fetchSuppliesSuccess(honeySupplies));
    } catch (error) {
        put(fetchSuppliesFailure(error.message));
    }
}

export function* fetchSuppliesStart() {
    yield takeEvery(ShopActionTypes.FETCH_SUPPLIES_START, fetchSuppliesAsync)
}

export function* shopSagas() {
    yield all([call(fetchSuppliesStart)])
}