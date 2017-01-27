import angular from 'angular';

import {tech} from './tech';
import {techs} from './techs';

import json from './techs.json';

export const techsModule = 'techs';

angular
  .module(techsModule, [])
  .component('fountainTech', tech)
  .component('fountainTechs', techs);
