import React from 'react'
import renderer from 'react-test-renderer'
import { ClickAwayListener } from '.'


it('ClickAwayListener: default', () => {
    const component = renderer.create(
        <ClickAwayListener>
            <>
                ClickAwayListener
            </>
        </ClickAwayListener>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

// TODO: https://material-ui.com/components/click-away-listener/
// export default function ClickAway() {
//     const [open, setOpen] = React.useState(false);

//     const handleClick = () => {
//         setOpen((prev) => !prev);
//     };

//     const handleClickAway = () => {
//         setOpen(false);
//     };

// <ClickAwayListener onClickAway={handleClickAway}>
//   <div className={classes.root}>
//     <button type="button" onClick={handleClick}>
//       Open menu dropdown
//     </button>
//     {open ? (
//       <div>
//         Click me, I will stay visible until you click outside.
//       </div>
//     ) : null}
//   </div>
// </ClickAwayListener>