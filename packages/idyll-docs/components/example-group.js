import Example from './example'

export default ({ title, examples }) => (
  <div className="example-group" id={title.split(' ').join('-')}>
    <h3 className="anchor" >{ title }</h3>
    <div className="examples">
      {
        examples.map(ex => <Example {...ex} key={ ex.href } />)
      }
    </div>

    <style jsx>{`
      .example-group {
        margin-top: 60px;
      }
      .examples {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 6px;
        margin-bottom: 3em;
      }
      .anchor {
        padding-top: 100px;
        margin-top: -100px;
      }

      @media all and (max-width: 600px) {
        .examples {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  </div>
)

