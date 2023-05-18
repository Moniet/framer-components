import GuideTemplate from './GuideTemplate'

const Guide = () => {
  return (
    <GuideTemplate
      header="How-to use FramerLib"
      videoSrc="https://pub-db5cfbac23934b6e9312219ce0bd3ca4.r2.dev/guide video.mp4"
    >
      <span />
      <p>
        Here is a step-by-step guide on how to copy components from FramerLib and paste them into
        your own Framer project:
      </p>{' '}
      <ol>
        <li>
          <p>Go to FramerLib and find the component that you want to copy</p>{' '}
        </li>
        <li>
          <p>In the component view, click on the &quot;Copy&quot; button to copy the component.</p>{' '}
        </li>
        <li>
          <p>
            Open your Framer project and navigate to the page where you want to paste the component.
          </p>
        </li>{' '}
        <li>
          <p>
            Right-click on the canvas and choose &quot;Paste&quot; or use the shortcut &quot;Ctrl +
            V&quot; on Windows or &quot;Cmd + V&quot; on Mac.
          </p>{' '}
        </li>
        <li>
          <p>
            The component should appear on your canvas. You can now adjust its size and position to
            fit your needs.
          </p>
        </li>
      </ol>
      <p>
        Note: When copying and pasting components, make sure that any necessary assets such as
        images or frames are also included in your project. Otherwise, the component may not appear
        correctly.
      </p>{' '}
      <p>
        Overall, copying and pasting components can save you a lot of time and effort when building
        prototypes. Give it a try and see how it can streamline your design workflow!
      </p>
    </GuideTemplate>
  )
}

export default Guide
