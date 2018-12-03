// @flow 

import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import { Unwrapped as UnwrappedSearch } from '../Search';
import showCard  from '../ShowCard';
import DataPilem from '../../data.json';

Enzyme.configure({ adapter: new Adapter() });
// console.log(process.env.NODE_ENV)

test('Search renders correctly', ()=> {
    const component = shallow(<UnwrappedSearch shows={DataPilem.shows} searchTerm='' />)
    expect(component).toMatchSnapshot()
})

test('Search should render correct amount of shows', () => {
    const component = shallow(<UnwrappedSearch shows={DataPilem.shows} searchTerm='' />)
    expect(component.find(showCard).length).toEqual(DataPilem.shows.length)
})

test('Search should render correct amount of shows based on search term', () => {
    const searchWord = 'black';
    const component = shallow(<UnwrappedSearch shows= {DataPilem.shows} searchTerm = {searchWord}/>)
    // component.find('input').simulate('change', {target: {value: searchWord}})

    const showCount = DataPilem.shows.filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0).length

    expect(component.find(showCard).length).toEqual(showCount)
})
