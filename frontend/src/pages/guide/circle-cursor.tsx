import React from 'react'
import GuideTemplate from '../../components/screens/GuideTemplate'

const ScrollSnapGuide = () => {
  return (
    <GuideTemplate
      header="Circle Cursor Guide"
      videoSrc="https://pub-db5cfbac23934b6e9312219ce0bd3ca4.r2.dev/circle cursor guide.mp4"
      desc="Learn how to add a custom global cursor animation with FramerLib"
    >
      <div />
      <h2>Steps:</h2>{' '}
      <ol>
        {' '}
        <li>
          <p>
            Here&apos;s a step-by-step guide on how to use the Circle Follow Cursor component from
            Framerlib in your Framer project:
          </p>
        </li>{' '}
        <li>
          <p>
            First, purchase the Framerlib component kit that includes the Circle Follow Cursor
            component.
          </p>
        </li>{' '}
        <li>
          <p>
            Open your Framer project and create a new layer to contain the Circle Follow Cursor
            component.
          </p>
        </li>{' '}
        <li>
          <p>
            Copy the Circle Follow Cursor component from the Framerlib kit and paste it into your
            new layer in Framer.
          </p>
        </li>{' '}
        <li>
          <p>
            Customise the cursor&apos;s size, colour, border width and colour, scale on hover,
            delay, and opacity by adjusting the values in the component&apos;s properties panel.
          </p>
        </li>{' '}
        <li>
          <p>Preview your project to see the Circle Follow Cursor in action.</p>
        </li>{' '}
      </ol>
      <h3>Tips when using this component:</h3>{' '}
      <ul>
        {' '}
        <li>
          You can customise the cursor&apos;s appearance by editing the included graphics in the
          Framer file.
        </li>{' '}
        <li>
          Experiment with different delay and scale values to find the perfect effect for your
          project.
        </li>{' '}
        <li>
          Make sure to test your project on different devices and screen sizes to ensure the cursor
          looks and behaves as intended.
        </li>{' '}
      </ul>{' '}
      <p>
        With the Circle Follow Cursor component from Framerlib, you can add a dynamic and
        customisable circle cursor to your Framer project that will enhance the user experience and
        make your project stand out.
      </p>
    </GuideTemplate>
  )
}

export default ScrollSnapGuide
