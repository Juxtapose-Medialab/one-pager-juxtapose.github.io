import React from "react";
import styles from './Process.module.scss';
import { Row, Col } from 'react-bootstrap';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

class Process extends React.Component {
  render() {
    return (
        <div className={ styles.process }>
          <h2 className={ styles.processTitle }>Process</h2>
          <div className={ styles.deskresearch }>
              <h3 className={ styles.deskresearchSmallTitle }>Deskresearch</h3>
            <Row>
              <Col xs={ 3 }>
                <div className={ styles.deskresearchCard }>
                  <h3 className={ styles.deskresearchCardTitle }>Deskresearch 1</h3>
                  <p className={ styles.deskresearchCardText }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed augue ut velit vehicula malesuada non at diam. Fusce ac tristique libero. Duis gravida augue vitae tempor pharetra. Quisque porta, metus vel fermentum pharetra, odio magna ultricies est, auctor pellentesque ex massa in felis.  Integer bibendum tincidunt mauris, vehicula commodo libero aliquet pretium. Curabitur ullamcorper nisi nibh.</p>
                </div>
              </Col>
              <Col xs={ 3 }>
                <div className={ styles.deskresearchCard }>
                  <h3 className={ styles.deskresearchCardTitle }>Deskresearch 1</h3>
                  <p className={ styles.deskresearchCardText }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed augue ut velit vehicula malesuada non at diam. Fusce ac tristique libero. Duis gravida augue vitae tempor pharetra. Quisque porta, metus vel fermentum pharetra, odio magna ultricies est, auctor pellentesque ex massa in felis.  Integer bibendum tincidunt mauris, vehicula commodo libero aliquet pretium. Curabitur ullamcorper nisi nibh.</p>
                </div>
              </Col>
              <Col xs={ 3 }>
              <div className={ styles.deskresearchCard }>
                  <h3 className={ styles.deskresearchCardTitle }>Deskresearch 1</h3>
                  <p className={ styles.deskresearchCardText }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed augue ut velit vehicula malesuada non at diam. Fusce ac tristique libero. Duis gravida augue vitae tempor pharetra. Quisque porta, metus vel fermentum pharetra, odio magna ultricies est, auctor pellentesque ex massa in felis.  Integer bibendum tincidunt mauris, vehicula commodo libero aliquet pretium. Curabitur ullamcorper nisi nibh.</p>
              </div>
              </Col>
              <Col xs={ 3 }>
                <div className={ styles.deskresearchCard }>
                  <h3 className={ styles.deskresearchCardTitle }>Deskresearch 1</h3>
                  <p className={ styles.deskresearchCardText }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed augue ut velit vehicula malesuada non at diam. Fusce ac tristique libero. Duis gravida augue vitae tempor pharetra. Quisque porta, metus vel fermentum pharetra, odio magna ultricies est, auctor pellentesque ex massa in felis.  Integer bibendum tincidunt mauris, vehicula commodo libero aliquet pretium. Curabitur ullamcorper nisi nibh.</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
    )
  }
}

export default Process;
