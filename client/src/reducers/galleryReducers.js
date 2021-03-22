import {
    GALLERY_LIST_REQUEST,
    GALLERY_LIST_SUCCESS,
    GALLERY_LIST_FAIL,
    GALLERY_DELETE_REQUEST,
    GALLERY_DELETE_SUCCESS,
    GALLERY_DELETE_FAIL,
    GALLERY_CREATE_RESET,
    GALLERY_CREATE_FAIL,
    GALLERY_CREATE_SUCCESS,
    GALLERY_CREATE_REQUEST,
    GALLERY_UPDATE_REQUEST,
    GALLERY_UPDATE_SUCCESS,
    GALLERY_UPDATE_FAIL,
    GALLERY_UPDATE_RESET,
  } from '../constants/galleryConstants'
  
  export const galleryListReducer = (state = { galleryitems: [] }, action) => {
    switch (action.type) {
      case GALLERY_LIST_REQUEST:
        return { loading: true, galleryitems: [] }
      case GALLERY_LIST_SUCCESS:
        return {
          loading: false,
          galleryitems: action.payload.galleryitems,
          pages: action.payload.pages,
          page: action.payload.page,
        }
      case GALLERY_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const galleryDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case GALLERY_DELETE_REQUEST:
        return { loading: true }
      case GALLERY_DELETE_SUCCESS:
        return { loading: false, success: true }
      case GALLERY_DELETE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const galleryCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case GALLERY_CREATE_REQUEST:
        return { loading: true }
      case GALLERY_CREATE_SUCCESS:
        return { loading: false, success: true, galleritem: action.payload }
      case GALLERY_CREATE_FAIL:
        return { loading: false, error: action.payload }
      case GALLERY_CREATE_RESET:
        return {}
      default:
        return state
    }
  }
  
  export const galleryUpdateReducer = (state = { galleryitem: {} }, action) => {
    switch (action.type) {
      case GALLERY_UPDATE_REQUEST:
        return { loading: true }
      case GALLERY_UPDATE_SUCCESS:
        return { loading: false, success: true, galleryitem: action.payload }
      case GALLERY_UPDATE_FAIL:
        return { loading: false, error: action.payload }
      case GALLERY_UPDATE_RESET:
        return { galleryitem: {} }
      default:
        return state
    }
  }
  
 