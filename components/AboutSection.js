// @flow

import React from 'react'
import Section from './Section'

type Props = { name?: string }

const Layout = ({ name = 'Section' }: Props) => (
  <Section name="About">
    <table>
      <tbody>
        <tr>
          <td>c</td>
          <td>a</td>
        </tr>
        <tr>
          <td>b</td>
          <td>b</td>
        </tr>
        <tr>
          <td>b</td>
          <td>b</td>
        </tr>
      </tbody>
    </table>
  </Section>
)

export default Layout
