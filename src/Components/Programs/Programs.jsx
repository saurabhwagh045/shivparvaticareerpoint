import React from 'react';
import './Programs.css';
import program_1 from '../../assets/indian-army-man.jpg';
import program_2 from '../../assets/avani-chaturvedi-indian-air-force-fighter-pilot.jpg';
import program_3 from '../../assets/indian-navy-sailor-uniform.avif';
import program_1_1 from '../../assets/Maharashtra-Police_AC.avif';
import program_2_1 from '../../assets/saral-seva-bharati_1.jpg';
import program_3_1 from '../../assets/indian-railways.jpg';

const Programs = () => {
  return (
    <div className='programs-container'>
      {/* First Row */}
      <div className='programs'>
        <div className="program">
          <img src={program_1} alt="Indian Army" />
          <div className="caption">
            <h1>Join Indian Army</h1>
          </div>
        </div>
        <div className="program">
          <img src={program_2} alt="Indian Air Force" />
          <div className="caption">
            <h1>Join Indian Air Force</h1>
          </div>
        </div>
        <div className="program">
          <img src={program_3} alt="Indian Navy" />
          <div className="caption">
            <h1>Join Indian Navy</h1>
          </div>
        </div>
      </div>

      {/* Second Row (Duplicate of the First Row) */}
      <div className='programs'>
        <div className="program">
          <img src={program_1_1} alt="Indian Army" />
          <div className="caption">
            <h1>Join Police</h1>
          </div>
        </div>
        <div className="program">
          <img src={program_2_1} alt="Indian Air Force" />
          <div className="caption">
            <h1>Saral Seva Bharati</h1>
          </div>
        </div>
        <div className="program">
          <img src={program_3_1} alt="Join Indian Railways" />
          <div className="caption">
            <h1>Join Indian Railways</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
