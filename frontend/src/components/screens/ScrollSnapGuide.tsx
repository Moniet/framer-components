import React from 'react'
import GuideTemplate from './GuideTemplate'

const ScrollSnapGuide = () => {
  return (
    <GuideTemplate
      header="Scroll Snap Guide"
      videoSrc="https://pub-db5cfbac23934b6e9312219ce0bd3ca4.r2.dev/snap-scroll-guide.mp4"
      desc="Learn how to add snap scroll on framer with the FramerLib SnapScroll component"
    >
      <div />
      <div />
      <h2>Adding a Copy and Paste Scroll Snap Component to Your Framer Project</h2>{' '}
      <p>
        By following these steps, you can quickly and easily add a copy and paste scroll snap
        component to your Framer project. This can help you save time and effort when designing and
        prototyping, and give your users a smooth scrolling experience.
      </p>{' '}
      <h3>Steps:</h3>{' '}
      <p>
        Here is a step-by-step guide on how to use the copy and paste scroll snap component for
        Framer:
      </p>{' '}
      <ol sx={{ pl: '1rem', li: { mt: '1rem', ml: '0', pl: 0 } }}>
        {' '}
        <li>
          <p>
            Once you have purchased the kit, copy the Snap Scroll component by clicking the copy
            button below the component from the Framerlib website.
          </p>
        </li>{' '}
        <li>
          <p>Open the Framer file where you want to use the component, or create a new file.</p>
        </li>{' '}
        <li>
          <p>
            Right-click anywhere in the file and choose &#34;Paste&#34;or use the shortcut
            &#34;Ctrl+ V&#34;or on Windows or &#34;Cmd + V&#34; on Mac.
          </p>
        </li>
        <li>
          <p>The scroll snap component should now appear in your frame.</p>{' '}
          <p>
            In your Framer file, create a new frame or open an existing frame where you want to use
            the component.
          </p>{' '}
          <p>
            Connect the component to an existing frame or stack or create a frame/frames that you
            would like to animate use the snap scroll component.{' '}
          </p>{' '}
          <p>Customise the component as needed to fit your design.</p>{' '}
          <p>Click on &apos;Preview&apos; to see the component in action!</p>
        </li>
      </ol>
    </GuideTemplate>
  )
}

export default ScrollSnapGuide
