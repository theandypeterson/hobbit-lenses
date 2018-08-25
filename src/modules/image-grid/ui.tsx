import * as React from 'react';
import './style.css';

// tslint:disable-next-line:no-empty-interface
export interface UIProps {
  showFrodo: boolean;
  showSamwise: boolean;
  showPeregrin: boolean;
  showMeriadoc: boolean;
}

export const ImageGridUI = (props: UIProps) => {
  return (
    <div className="ImageGrid">
      <div className="ImageBox">
        {props.showFrodo && <img src="https://vignette.wikia.nocookie.net/lotr/images/5/54/Untitledjk.png/revision/latest?cb=20130313174543" className="ImageInBox" />}
      </div>
      <div className="ImageBox">
        {props.showSamwise && <img src="https://vignette.wikia.nocookie.net/lotr/images/4/45/Samwise2.jpg/revision/latest?cb=20060508090312" className="ImageInBox"/>}
      </div>
      <div className="ImageBox">
        {props.showPeregrin && <img src="https://vignette.wikia.nocookie.net/lotr/images/0/0a/Pippinprintscreen.jpg/revision/latest?cb=20060310083048" className="ImageInBox" />}
      </div>
      <div className="ImageBox">
        {props.showMeriadoc && <img src="https://vignette.wikia.nocookie.net/lotr/images/7/75/0006AC40-2CAA-1FD7-8DAB80C328EC0000.jpg/revision/latest?cb=20060310083000" className="ImageInBox" />}
      </div>
    </div>
  );
}