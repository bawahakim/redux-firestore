import * as Firebase from 'firebase';
import { Dispatch } from 'redux';

/**
 * Action types used within actions dispatched internally. These action types
 * can be manually dispatched to update state.
 */
export const actionTypes: {
  START: string;
  ERROR: string;
  CLEAR_DATA: string;
  CLEAR_ERROR: string;
  CLEAR_ERRORS: string;
  SET_LISTENER: string;
  UNSET_LISTENER: string;
  GET_REQUEST: string;
  GET_SUCCESS: string;
  GET_FAILURE: string;
  SET_REQUEST: string;
  SET_SUCCESS: string;
  SET_FAILURE: string;
  ADD_REQUEST: string;
  ADD_SUCCESS: string;
  ADD_FAILURE: string;
  UPDATE_REQUEST: string;
  UPDATE_SUCCESS: string;
  UPDATE_FAILURE: string;
  DELETE_REQUEST: string;
  DELETE_SUCCESS: string;
  DELETE_FAILURE: string;
  ATTACH_LISTENER: string;
  LISTENER_RESPONSE: string;
  LISTENER_ERROR: string;
  ON_SNAPSHOT_REQUEST: string;
  ON_SNAPSHOT_SUCCESS: string;
  ON_SNAPSHOT_FAILURE: string;
};

/**
 * Constants used within redux-firetore. Includes actionTypes, actionsPrefix,
 * and default config.
 */
export const constants: {
  actionTypes: {
    START: string;
    ERROR: string;
    CLEAR_DATA: string;
    CLEAR_ERROR: string;
    CLEAR_ERRORS: string;
    SET_LISTENER: string;
    UNSET_LISTENER: string;
    GET_REQUEST: string;
    GET_SUCCESS: string;
    GET_FAILURE: string;
    SET_REQUEST: string;
    SET_SUCCESS: string;
    SET_FAILURE: string;
    ADD_REQUEST: string;
    ADD_SUCCESS: string;
    ADD_FAILURE: string;
    UPDATE_REQUEST: string;
    UPDATE_SUCCESS: string;
    UPDATE_FAILURE: string;
    DELETE_REQUEST: string;
    DELETE_SUCCESS: string;
    DELETE_FAILURE: string;
    ATTACH_LISTENER: string;
    LISTENER_RESPONSE: string;
    LISTENER_ERROR: string;
    ON_SNAPSHOT_REQUEST: string;
    ON_SNAPSHOT_SUCCESS: string;
    ON_SNAPSHOT_FAILURE: string;
  };
  actionsPrefix: string;
  defaultConfig: Config;
};

export interface Config {
  enableLogging: boolean;

  helpersNamespace: string | null;

  // https://github.com/prescottprue/redux-firestore#loglistenererror
  logListenerError: boolean;

  // https://github.com/prescottprue/redux-firestore#enhancernamespace
  enhancerNamespace: string;

  // https://github.com/prescottprue/redux-firestore#allowmultiplelisteners
  allowMultipleListeners:
    | ((listenerToAttach: any, currentListeners: any) => boolean)
    | boolean;

  // https://github.com/prescottprue/redux-firestore#preserveondelete
  preserveOnDelete: null | object;

  // https://github.com/prescottprue/redux-firestore#preserveonlistenererror
  preserveOnListenerError: null | object;

  // https://github.com/prescottprue/redux-firestore#onattemptcollectiondelete
  onAttemptCollectionDelete:
    | null
    | ((queryOption: string, dispatch: Dispatch, firebase: Object) => void);

  // https://github.com/prescottprue/redux-firestore#mergeordered
  mergeOrdered: boolean;

  // https://github.com/prescottprue/redux-firestore#mergeordereddocupdate
  mergeOrderedDocUpdate: boolean;

  // https://github.com/prescottprue/redux-firestore#mergeorderedcollectionupdates
  mergeOrderedCollectionUpdates: boolean;
}

/**
 * A redux store enhancer that adds store.firebase (passed to React component
 * context through react-redux's <Provider>).
 */
export function reduxFirestore(
  firebaseInstance: typeof Firebase,
  otherConfig?: Partial<Config>,
): any;

/**
 * Get extended firestore instance (attached to store.firestore)
 */
export function getFirestore(
  firebaseInstance: typeof Firebase,
  otherConfig?: Partial<Config>,
): any;

export namespace FirestoreReducer {
  export interface Reducer<Schema extends Record<string, any> = {}> {
    composite?: Data<any | Dictionary<any>>;
    data: { [T in keyof Schema]: Record<string, Schema[T]> };
    errors: {
      allIds: string[];
      byQuery: any[];
    };
    listeners: Listeners;
    ordered: {
      [T in keyof Schema]: Array<Schema[T]>;
    };
    queries: Data<ReduxFirestoreQuerySetting & (Dictionary<any> | any)>;
    status: {
      requested: Dictionary<boolean>;
      requesting: Dictionary<boolean>;
      timestamps: Dictionary<number>;
    };
  }

  const prototype: {};
}

/**
 * A redux store reducer for Firestore state
 */
export function firestoreReducer<Schema extends Record<string, any> = {}>(
  state: any,
  action: any,
): FirestoreReducer.Reducer;

/**
 * Create a firestore instance that has helpers attached for dispatching actions
 */
export function createFirestoreInstance(
  firebaseInstance: typeof Firebase,
  configs: Partial<Config>,
  dispatch: Dispatch,
): object;

/**
 * A redux store reducer for Firestore state
 */
export namespace firestoreReducer {
  const prototype: {};
}

/**
 * A redux store reducer for Firestore state
 */
export namespace reduxFirestore {
  const prototype: {};
}
