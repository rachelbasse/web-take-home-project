import RestApiClient from './RestApiClient';

//------------------------------------------------------------------------------
//-------------------------- Add a Project API Call-----------------------------
//------------------------------------------------------------------------------

const addProject = (newProjectPayload, successCallback) {
  RestApiClient({
    relativeUrl: '/v1/me/project',
    type: 'POST',
    payload: newProjectPayload,
    successCallback
  });
}