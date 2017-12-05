//-----------------------------------------------
//---------------- App variables ----------------
//-----------------------------------------------

// Uploadcare
export const DEFAULT_UPLOADCARE_SETTINGS = {
  multiple: true,
  tabs: 'file camera',
  imageShrink: '1920x1440 80%',
  previewStep: true,
  inputAcceptTypes: null
}

// Middleware & RestApiClient
export const BASIC_API_TOKEN = 'YXBwOllYQndPbk5wWlc1dVlUSXdNVEZ6YjJacFlUSXdNVFU9';
export const BEARER_API_TOKEN = 'UserSpecificToken'; // Ask Sam for a valid token. This token is how we identify the user making the API call.
export const PRIVACY_TYPE_AUTH = 'auth';
export const PRIVACY_TYPE_BASIC = 'basic';
export const API_URL = "https://staging-api.workyard.com";


//-----------------------------------------------
//---------------- Action names -----------------
//-----------------------------------------------