import React from 'react';
import { Button, Form, Grid, Header, Image, List, Modal, Icon, Message, Segment } from 'semantic-ui-react'


class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // not sure how to handle imgs (use a link?)
      instruments : [{name: guitar, img: ''}]; // example of an instrument 
      image: ''
    }
   this.pickInstrument = this.pickInstrument.bind(this);
  }

  pickInstrument(instrument) {
     if (this.state.instruments.includes(instrument) === false) {
        this.state.push({name: instrument, img: ''});
      }
      for (var i = 0; i < this.state.instruments; i++) {
        if (this.state.instruments[i] === instrument) {
          this.image = this.state.instruments[i].image;
        }
      } 
      if (input === 'other') {
        this.image = 'other';
      }
  }


  render() {
    <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
    `}</style>
    return (
      <div className='login-form'>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h1' textAlign='center'>
                <div className="login-logo-name" > InstaLawa </div>
           </Header>
            <Form size='large'>
              <Segment stacked>
                <input
                  placeholder='Pick Your Instrument'
                  ref={(input) => { this.pickInstrument(input); }}
                  className="login-input"
                />


                <Button class="ui secondary button" onClick={(e) => {this.logIn(e.target.value)}} fluid size='large'>Login</Button>
              </Segment>
            </Form>
            <Message>
              <Modal size="tiny" trigger={<Button>Join a Room</Button>} closeIcon>
              <Modal.Header>Welcome to <span className="modal-logo"> InstaLawa!</span></Modal.Header>
              <Modal.Content>
                <Form>
                <Segment stacked>
                <input placeholder='Select a room name' ref={i => {this.room = i }} />
              </Segment>
                    <Modal size="mini" trigger={<Button type="submit" id="signUp" onClick={e => { this.props.signUp([this.newEmail, this.newUsername]) }}>Let's get started</Button>}>
                       <Grid textAlign="center">
                       <Button color="green" style={{width: '100%'}}><Icon name="checkmark" />You're all set!</Button>
                       </Grid>
                    </Modal>
              </Form>
              </Modal.Content>
            </Modal>
            </Message>
          </Grid.Column>
        </Grid>
      </div>


    );
  }
}

export default Landing;
