/* @flow */
import {shallow} from 'enzyme'
import {expect} from 'chai'
import React from 'react'

import App from './App'

describe('App', () => {
  it('should render', () => {
    const wrapper = shallow(<App/>) //doesn't work
    //const wrapper = shallow(React.createElement(App)) // doesn't work
    //const wrapper = shallow(React.createElement("div", null, "Test")) // works
    expect(wrapper.find('div').exists()).to.be.true
  })
})
