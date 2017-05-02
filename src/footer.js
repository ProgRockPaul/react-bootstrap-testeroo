import React from 'react';
import ReactDOM from 'react-dom';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';


const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');



module.exports = {FacebookIcon, TwitterIcon, GooglePlusIcon, LinkedinIcon};
