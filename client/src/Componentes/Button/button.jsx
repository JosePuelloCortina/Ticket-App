import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const MyButton = styled(Button)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '10px 20px',
    position: 'static',
    left: '56.86%',
    right: '0%',
    top: '0%',
    bottom: '0%',
    background: '#5ED5A8',
    borderRadius: '6px',

/* Inside auto layout */
    flex: 'none',
    order: 1,
    flexGrow: 0,
    margin: '0px 14px',
  });

  export default function StyledComponents({value}) {
    return <MyButton>{value}</MyButton>;
  }