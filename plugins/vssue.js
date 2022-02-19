import Vue from 'vue';
import Vssue from 'vssue';
import github from '@vssue/api-github-v4';
import config from '@config/global';

Vue.use(Vssue, {
  api: github,
  ...config.vssueConfig
});