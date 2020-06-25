let initialState = {
    //AuthPage
    isLoginPageOpen: false,
    isSignupPageOpen: false,
    isBannerPageOpen: true,

    //DashBoard
    isEditPageOpen: true,
    isDetailsPageOpen: false,


    isClientCardsPageOpen: true,
    isCardDetailsPageOpen: false,

    //Main Page
    isAuthPageOpen: true,
    isClientPageOpen: false,
    isDashboardPageOpen: false,

    detailsPageID: '',

    isCardAddedSuccess: false,
    isDelete: false,
    isEdited: false

};

//loadFromLocalStorage() !== undefined ? initialState = loadFromLocalStorage() : initialState;

const uireducers = (state = initialState, action) => {
    switch (action.type) {

        case 'ADDED_FALSE':
            return {
                ...state,
                isCardAddedSuccess: false
            }

        case 'DELETED_FALSE':
            return {
                ...state,
                isDelete: false
            }

        case 'EDITED_FALSE':
            return {
                ...state,
                isEdited: false
            }

        case 'EDIT_CARD':
            return {
                ...state,
                isEdited: true
            }

        case 'CARD_DELETE':
            return {
                ...state,
                isDelete: true
            }

        case 'NEW_CARD_ADDED_SUCCESS':
            return {
                ...state,
                isCardAddedSuccess: true
            }

        case 'CLICKED_EDIT_PAGE':
            return {
                ...state,
                isEditPageOpen: true,
                isDetailsPageOpen: false
            }


        case 'CLOSE_DETAILS':
            return {
                isClientCardsPageOpen: true,
                isCardDetailsPageOpen: false,

            }

        case 'CLICKED_DETAILS_PAGE':
            return {
                isEditPageOpen: false,
                isDetailsPageOpen: true,

            }

        case 'OPEN_DETAIL_PAGE':
            return {
                ...state,
                isClientCardsPageOpen: false,
                isCardDetailsPageOpen: true,
                detailsPageID: action.id
            }

        case 'LOGIN_BACK_CLICKED':
            return {
                ...state,
                isBannerPageOpen: true,
                isLoginPageOpen: false,
                isSignupPageOpen: false
            }

        case 'SIGNUP_BACK_CLICKED':
            return {
                ...state,
                isBannerPageOpen: true,
                isLoginPageOpen: false,
                isSignupPageOpen: false
            }



        case 'BANNER_LOGIN_CLICKED':
            return {
                ...state,
                isLoginPageOpen: true,
                isSignupPageOpen: false,
                isBannerPageOpen: false
            }

        case 'BANNER_SIGNUP_CLICKED':
            return {
                ...state,
                isLoginPageOpen: false,
                isSignupPageOpen: true,
                isBannerPageOpen: false
            }

        default:
            break;
    }

    return state;
};

export default uireducers;