import React from 'react'
import "./Timeline.css"

export default function Timeline() {
  return (
    <>
      <ul class="base-timeline">
        <li class="base-timeline__item base-timeline__item--data"
          data-year="2020">
          <span class="base-timeline__summary-text">Hack Starts</span>
        </li>
        <li class="base-timeline__item base-timeline__item--data" data-year="2019">
          <span class="base-timeline__summary-text">Item 2</span>
        </li>
        <li class="base-timeline__item base-timeline__item--data"
          data-year="2018">
          <span class="base-timeline__summary-text">Item 3</span>
        </li>
        <li class="base-timeline__item base-timeline__item--data"
          data-year="2017">
          <span class="base-timeline__summary-text">Hack ends</span>
        </li>
      </ul>
    </>
  )
}
