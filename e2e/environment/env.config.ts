import { EnvironmentConfiguration } from './env.model';

require('dotenv').config();

export default {
  E2E_URL: process.env.E2E_URL ? process.env.E2E_URL : '',
  E2E_RUNNING_AGAINST_PROD: process.env.E2E_ENVIRONMENT === 'prod',
  SET_COOKIE_USER: process.env.SET_COOKIE_USER ? process.env.SET_COOKIE_USER : '',
  SET_COOKIE_PASSWORD: process.env.SET_COOKIE_PASSWORD
    ? process.env.SET_COOKIE_PASSWORD
    : '',
  E2E_ENVIRONMENT: process.env.E2E_ENVIRONMENT ? process.env.E2E_ENVIRONMENT : 'pre-prod',
  E2E_TIMEOUT_PUPPETEER: process.env.E2E_TIMEOUT_PUPPETEER ? parseInt(process.env.E2E_TIMEOUT_PUPPETEER, 10) : 60000,
  E2E_COUNTRY_TESTING: process.env.E2E_COUNTRY_TESTING,
  E2E_HEADLESS: process.env.E2E_HEADLESS === 'true',
  E2E_GENERATE_REPORT: process.env.E2E_GENERATE_REPORT === 'true',
  E2E_SLOW_CONNECTION: process.env.E2E_SLOW_CONNECTION === 'true',
  TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
  TWILIO_SUB_ACCOUNT_SID: process.env.TWILIO_SUB_ACCOUNT_SID,
  E2E_ARE_RUNNING_ON_JENKINS: !!process.env.JENKINS_AGENT_WORKDIR,
  E2E_REPORT_ON_SLACK: process.env.E2E_REPORT_ON_SLACK === 'true',
  SLACK_WEBHOOK: getSlackWebHook(),
  E2E_USER_NAME: process.env.E2E_USER_NAME ? process.env.E2E_USER_NAME : '',
  SLACK_CHANNEL: process.env.SLACK_CHANNEL,
  SLACK_BOT_TOKEN: process.env.SLACK_BOT_TOKEN,
  BUILD_NUMBER: process.env.BUILD_NUMBER ? process.env.BUILD_NUMBER : 1,
  HTTPS_PROXY: process.env.HTTPS_PROXY ? process.env.HTTPS_PROXY : '',
  JOB_NAME: process.env.JOB_NAME ? process.env.JOB_NAME : '',
  BUILD_URL: process.env.BUILD_URL ? process.env.BUILD_URL : undefined,
  E2E_PRICING_CONCILIATION: process.env.E2E_PRICING_CONCILIATION === 'true',
  E2E_FOR_QUOTE_AND_BUY: process.env.E2E_FOR_QUOTE_AND_BUY === 'true',
  E2E_FOR_CONTACT_CENTER: process.env.E2E_FOR_CONTACT_CENTER === 'true',
  E2E_FOR_CONTACT_CENTER_LOGIN: process.env.E2E_FOR_CONTACT_CENTER_LOGIN === 'true',
  E2E_FOR_PORTAL: process.env.E2E_FOR_PORTAL === 'true',
  E2E_FOR_CLAIMS: process.env.E2E_FOR_CLAIMS === 'true',
  E2E_FOR_HOME: process.env.E2E_FOR_HOME === 'true',
  E2E_PRESERVE_SESSIONS: process.env.E2E_PRESERVE_SESSIONS === 'true',
  E2E_CONTACT_CENTER_TECH_USER_CRT: process.env.E2E_CONTACT_CENTER_TECH_USER_CRT
    ? process.env.E2E_CONTACT_CENTER_TECH_USER_CRT
    : '',
  E2E_CONTACT_CENTER_TECH_USER_KEY: process.env.E2E_CONTACT_CENTER_TECH_USER_KEY
    ? process.env.E2E_CONTACT_CENTER_TECH_USER_KEY
    : '',
  E2E_CONTACT_CENTER_URL: process.env.E2E_CONTACT_CENTER_URL
    ? process.env.E2E_CONTACT_CENTER_URL
    : '}',
  SAML_SSO_URL: process.env.SAML_SSO_URL
    ? process.env.SAML_SSO_URL
    : '',
  SAML_SSO_URL_TEST: process.env.SAML_SSO_URL_TEST
    ? process.env.SAML_SSO_URL_TEST
    : '',
  CHECK_OUTGOING_MAILS: process.env.CHECK_OUTGOING_MAILS === 'true',
  MAILDEV_URL: process.env.MAILDEV_URL,
  CLAIMS_RPA_MAIL_RECIPIENT: process.env.CLAIMS_RPA_MAIL_RECIPIENT,
  E2E_INPUT_PATH: process.env.E2E_INPUT_PATH ? process.env.E2E_INPUT_PATH : '',
  E2E_FOR_UW: process.env.E2E_FOR_UW === 'true',
  E2E_FOR_AF: process.env.E2E_FOR_AF === 'true',
  E2E_FOR_PRODUCT: process.env.E2E_FOR_PRODUCT === 'true',
  E2E_POLICY_DATA_ROW: process.env.E2E_POLICY_DATA_ROW ? process.env.E2E_POLICY_DATA_ROW : '3',
  E2E_POLICY_DATA_ENDPOINT: process.env.E2E_POLICY_DATA_ENDPOINT,
  E2E_FOR_CREATE_POLICY: process.env.E2E_FOR_CREATE_POLICY === 'true',
  E2E_POLICY_DATA_STARTDATE: process.env.E2E_POLICY_DATA_STARTDATE ? process.env.E2E_POLICY_DATA_STARTDATE : '',
  E2E_POLICY_DATA_ENDDATE: process.env.E2E_POLICY_DATA_ENDDATE ? process.env.E2E_POLICY_DATA_ENDDATE : '',
  E2E_POLICY_DATA_THREAD: process.env.E2E_POLICY_DATA_THREAD ? process.env.E2E_POLICY_DATA_THREAD : '1',
  E2E_DOCUMENT_ENDPOINT: process.env.E2E_DOCUMENT_ENDPOINT,
  E2E_POLICY_MAX_BANK_TRANSFER: process.env.E2E_POLICY_MAX_BANK_TRANSFER
    ? process.env.E2E_POLICY_MAX_BANK_TRANSFER
    : '20',
  E2E_PRODUCT_DATA_ROW: process.env.E2E_PRODUCT_DATA_ROW ? process.env.E2E_PRODUCT_DATA_ROW : '3',
  E2E_PRODUCT_DATA_ENDPOINT: process.env.E2E_PRODUCT_DATA_ENDPOINT ? process.env.E2E_PRODUCT_DATA_ENDPOINT : '',
  E2E_PERSONAL_AREA_ENDPOINT: process.env.E2E_PERSONAL_AREA_ENDPOINT ? process.env.E2E_PERSONAL_AREA_ENDPOINT : '',
  E2E_SEARCH_PERSON_BY_SSN_ENDPOINT: process.env.E2E_SEARCH_PERSON_BY_SSN_ENDPOINT
    ? process.env.E2E_SEARCH_PERSON_BY_SSN_ENDPOINT
    : '',
  E2E_DATA_PERSON_ENDPOINT: process.env.E2E_DATA_PERSON_ENDPOINT ? process.env.E2E_DATA_PERSON_ENDPOINT : '',
  E2E_BASIC_AUTH_USERNAME: process.env.E2E_BASIC_AUTH_USERNAME ? process.env.E2E_BASIC_AUTH_USERNAME : '',
  E2E_BASIC_AUTH_PSW: process.env.E2E_BASIC_AUTH_PSW ? process.env.E2E_BASIC_AUTH_PSW : '',
  E2E_DATA_EMAIL_ENDPOINT: process.env.E2E_DATA_EMAIL_ENDPOINT ? process.env.E2E_DATA_EMAIL_ENDPOINT : '',
  E2E_CHECK_EMAIL_ENDPOINT: process.env.E2E_CHECK_EMAIL_ENDPOINT ? process.env.E2E_CHECK_EMAIL_ENDPOINT : '',
  E2E_CHECK_RAP_ENDPOINT: process.env.E2E_CHECK_RAP_ENDPOINT ? process.env.E2E_CHECK_RAP_ENDPOINT : '',
  E2E_PULL_REQUEST_ID: process.env.E2E_PULL_REQUEST_ID ? process.env.E2E_PULL_REQUEST_ID : '',
  E2E_FOR_QB: process.env.E2E_FOR_QB === 'true',
  E2E_QB_DATA_ENDPOINT: process.env.E2E_QB_DATA_ENDPOINT ? process.env.E2E_QB_DATA_ENDPOINT : '',
  E2E_QB_NQ_DATA_ENDPOINT: process.env.E2E_QB_NQ_DATA_ENDPOINT ? process.env.E2E_QB_NQ_DATA_ENDPOINT : '',
  E2E_QB_DOCUMENT_SERVICE_ENDPOINT: process.env.E2E_QB_DOCUMENT_SERVICE_ENDPOINT
    ? process.env.E2E_QB_DOCUMENT_SERVICE_ENDPOINT
    : '',
  E2E_QB_BASIC_AUTH_USERNAME: process.env.E2E_QB_BASIC_AUTH_USERNAME ? process.env.E2E_QB_BASIC_AUTH_USERNAME : '',
  E2E_QB_BASIC_AUTH_PSW: process.env.E2E_QB_BASIC_AUTH_PSW ? process.env.E2E_QB_BASIC_AUTH_PSW : '',
  E2E_PRODUCT_DATA_STARTDATE: process.env.E2E_PRODUCT_DATA_STARTDATE ? process.env.E2E_PRODUCT_DATA_STARTDATE : '',
  E2E_PRODUCT_DATA_ENDDATE: process.env.E2E_PRODUCT_DATA_ENDDATE ? process.env.E2E_PRODUCT_DATA_ENDDATE : '',
  E2E_UW_DATA_ENDPOINT: process.env.E2E_UW_DATA_ENDPOINT ? process.env.E2E_UW_DATA_ENDPOINT : '',
  E2E_TEST_DATA_THREAD: process.env.E2E_TEST_DATA_THREAD ? process.env.E2E_TEST_DATA_THREAD : '1',
  E2E_AF_DATA_ENDPOINT: process.env.E2E_AF_DATA_ENDPOINT ? process.env.E2E_AF_DATA_ENDPOINT : '',
  E2E_QB_SFQ_DATA_ENDPOINT: process.env.E2E_QB_SFQ_DATA_ENDPOINT ? process.env.E2E_QB_SFQ_DATA_ENDPOINT : '',
  E2E_QB_2D_DATA_ENDPOINT: process.env.E2E_QB_2D_DATA_ENDPOINT ? process.env.E2E_QB_2D_DATA_ENDPOINT : '',
  E2E_FOR_SAVE_QUOTATION: process.env.E2E_FOR_SAVE_QUOTATION === 'true',
  E2E_QUOTATION_MODEL_DETAIL_SERVICE: process.env.E2E_QUOTATION_MODEL_DETAIL_SERVICE ?
  process.env.E2E_QUOTATION_MODEL_DETAIL_SERVICE : ''
} as EnvironmentConfiguration;

function getSlackWebHook() {
  let slackWebook = process.env.SLACK_WEBHOOK ? process.env.SLACK_WEBHOOK : '';
  return slackWebook;
}
