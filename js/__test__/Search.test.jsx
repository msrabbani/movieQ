import React from 'react';
import {shallow} from 'enzyme'
import Search from '../Search';
import showCard  from '../ShowCard';
import DataPilem from '../../data.json'


console.log(process.env.NODE_ENV)

test('Search renders correctly', ()=> {
    const component =  shallow(<Search />)
    expect(component).toMatchSnapshot()
})

test('Search should render correct amount of shows', () => {
    const component = shallow(<Search />)
    expect(component.find(showCard).length).toEqual(DataPilem.shows.length)
})

test('Search should render correct amount of shows based on search term', () => {
    const searchWord = 'black';
    const component = shallow(<Search />)
    component.find('input').simulate('change', {target: {value: searchWord}})

    const showCount = DataPilem.shows.filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0).length

    expect(component.find(showCard).length).toEqual(showCount)
})
