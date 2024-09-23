import { readable, writable } from 'svelte/store';

import { armor } from './lib/content/adventuring-gear.json'
import { list } from './lib/content/test-characters.json'
import { character } from './lib/content/test-characters.json'

const activePage = writable('home');
const activeSheetSection = writable('stats');

const testCharacters = writable(list);     

const characterData = writable(character);

const armorList = readable(armor);

export {activePage, activeSheetSection, testCharacters, characterData, armorList};