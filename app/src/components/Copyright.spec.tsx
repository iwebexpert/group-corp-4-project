import React from 'react'
import Link from '@mui/material/Link';
import Copyright from './Copyright'

import * as renderer from 'react-test-renderer'
import {test, expect} from '@jest/globals'

import {shallow, mount} from 'enzyme'

test('Copyright should be rendered', () => {
  // const a = 3
  // expect(a).toBe(3)

  const testRenderer = renderer.create(<Copyright sx={{mt: 1}} />)
  const treeJson = testRenderer.toJSON()
  expect(treeJson).toMatchSnapshot()

  const testInstance = testRenderer.root
  expect(testInstance.findByType(Link).props.href).toBe('https://mui.com/')
})

test('Copyright should be rendered as ForwardRef(Link)', () => {
  const tree = shallow(<Copyright sx={{mt: 1}} />)
  const aTag = tree.find('ForwardRef(Link)')

  // console.log(tree.debug())

  expect(aTag.length).toBe(1)
})

test('Copyright should be rendered as link', () => {
  const tree = mount(<Copyright sx={{mt: 1}} />)
  const aTag = tree.find('a')

  // console.log(tree.debug())

  expect(aTag.length).toBe(1)
})