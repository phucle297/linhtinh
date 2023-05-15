// const baseApi = 'https://lofmalto-admin-backend.mltechsoft.com'
// const baseApi = 'http://api.lofmalto.vn'
const baseApi = process.env.baseURL
const baseUrlVideo = process.env.baseVideoServer
const APIUrlEnum = {
  GET_PRODUCTS: '/api/products',
  GET_TYPES: '/api/types',
  GET_ABOUT_TYPES: '/api/about/types',
  GET_ABOUT: '/api/about',
  GET_TIKTOK: '/api/tiktok',
  GET_LIBRARY: `${baseApi}/flashmob-submissions`,
  GET_LIBRARY_DETAIL: `${baseApi}/flashmob-submissions/detail`,
  VOTE_LIBRARY: `${baseApi}/flashmob-submissions/vote-by-ip`,
  DOWNVOTE_LIBRARY: `${baseApi}/flashmob-submissions/down-vote-by-ip`,
  VOTING_TIME: `${baseApi}/flashmob-submissions/schedule-voting-time`,
  GET_LIST_VOTING_TIME: `${baseApi}/configurations/voting-times`,
  ACCECT_VOTE: `${baseApi}/flashmob-submissions/accept`,
  CHECK_DEVICE_TOKEN: `${baseApi}/flashmob-submissions/check-submission-device-token-by-ip`,
  UPLOAD_VIDEO: `${baseUrlVideo}/flashmob-submissions/videos/upload-to-video-server`,
  GET_CITIES: `${baseApi}/locations/cities`,
  GET_DISTRICTS: `${baseApi}/locations/districts/`,
  GET_SCHOOL: `${baseApi}/locations/schools/`,
  SEND_FORM: `${baseApi}/flashmob-submissions`,
  SEND_FORM_OLD_TEAM: `${baseApi}/flashmob-submissions/old-team`,
  GET_DANCE_TYPES: `${baseApi}/flashmob-submissions/participation-types`,
  GET_ROUND: `${baseApi}/flashmob-submissions/rounds`,
  GET_LONGLIVE_TOKEN: `${baseApi}/users/facebook/longlive-token`,
  GET_TOTAL_PARTICIPATION: `${baseApi}/reports/flashmob-malto/total-participation`,
  GET_TOTAL_VOTE: `${baseApi}/reports/flashmob-malto/total-voted`,
  GET_TOTAL_SCHOOL: `${baseApi}/reports/flashmob-malto/total-school`,
  GET_TOTAL_CITY: `${baseApi}/reports/flashmob-malto/total-city`,
  GET_TOTAL_SUBMISSION: `${baseApi}/reports/flashmob-malto/total-submission`,
  GET_TEAM_INFORMATION: `${baseApi}/flashmob-submissions/flashmob-team-information`,
  GET_TOP_CITY: `${baseApi}/reports/flashmob-malto/representative-city`,
  GET_TOP_SCHOOL: `${baseApi}/reports/flashmob-malto/representative-school`,
  GET_TEAM: `${baseApi}/flashmob-submissions/flashmob-team-information`
}

export default APIUrlEnum
