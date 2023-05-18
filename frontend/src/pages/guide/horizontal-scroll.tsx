import GuideTemplate from '@/components/screens/GuideTemplate'

const HorizontalScrollGuide = () => {
  return (
    <GuideTemplate
      header="How-to Use Horizontal Scroll"
      videoSrc="https://pub-db5cfbac23934b6e9312219ce0bd3ca4.r2.dev/horizontal scroll guide.mp4"
    >
      <div />
      <h2>Steps:</h2>{' '}
      <ul>
        {' '}
        <li>
          <p>Purchase the Framerlib kit to use the component.</p>
        </li>{' '}
        <li>
          <p>
            Copy the Horizontal scroll component from the Framerlib components page by clicking on
            the &apos;Copy&apos; button below the component.{' '}
          </p>
        </li>{' '}
        <li>
          <p>
            Open your Framer project or create a new file where you want to use the horizontal
            scroll component.
          </p>
        </li>{' '}
        <li>
          <p>
            Paste the component by right clicking and selecting &apos;Paste&apos; or by using the
            &apos;Paste&apos; function (Ctrl+V or Command+V).
          </p>
        </li>{' '}
        <li>
          <p>
            Connect the horizontal scroll component to desired frames or a stack containing frames
            with images.
          </p>
        </li>{' '}
        <li>
          <p>
            Customise the component (by editing frames/ stack that it is connected to) to fit your
            project&apos;s needs.{' '}
          </p>
        </li>{' '}
        <li>
          <p>
            Preview your project (scroll from left to right) to see how the horizontal scroll
            component works with your frames or images.
          </p>
        </li>
      </ul>
      <p>
        That&apos;s it! With these steps, you should be able to easily copy and paste a horizontal
        scroll component from Framerlib into your Framer project and start using it to enhance your
        user interface.
      </p>
    </GuideTemplate>
  )
}

export default HorizontalScrollGuide
