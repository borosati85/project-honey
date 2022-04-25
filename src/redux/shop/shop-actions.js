import ShopActionTypes from './shop-types';
import { firestore, /*convertCollectionsSnapshotToMap*/ } from '../../firebase/firebase.utils';
import { collection, onSnapshot } from 'firebase/firestore';

const fetchSuppliesStart = () => ({
    type: ShopActionTypes.FETCH_SUPPLIES_START
})

const fetchSuppliesSuccess = supplies => ({
    type: ShopActionTypes.FETCH_SUPPLIES_SUCCESS,
    payload: supplies
})

const fetchSuppliesFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_SUPPLIES_FAILURE,
    payload: errorMessage
})

const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = collection(firestore, 'supplies');
        dispatch(fetchSuppliesStart())

        onSnapshot(collectionRef, async snapshot => {
            //const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            //dispatch(fetchSuppliesSuccess(collectionsMap))
            }, 
            error => dispatch(fetchSuppliesFailure(error.message))
        )
    }
}

export { fetchCollectionsStartAsync, fetchSuppliesStart, fetchSuppliesSuccess, fetchSuppliesFailure };