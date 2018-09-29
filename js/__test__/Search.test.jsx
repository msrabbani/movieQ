import React from 'react';
import {shallow} from 'enzyme'
import Search from '../Search';
import ShowCard  from '../ShowCard';
import DataPilem from '../../data.json'


console.log(process.env.NODE_ENV)

test('Search renders correctly', ()=> {
    const component =  shallow(<Search />)
    expect(component).toMatchSnapshot()
})

test('Search should render correct amount of shows', () => {
    const component = shallow(<Search />)
    expect(DataPilem.shows.length).toEqual(component.find(ShowCard).length)
})

xtest('Search should render correct amount of shows based on search term', () => {


})
