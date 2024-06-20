import React from 'react';
import './re.css';

export default function Re() {
  return (
    <div className='re-body'>
      <div className='accordian'>
        <ul>
          <li className='box' id='education'>
            <input type='radio' name='section' id='education-radio'checked />
            <label htmlFor='education-radio'>EDUCATION</label>
            <div className='content'>
              <table className='ta'>
                <tbody>
                  <tr>
                    <td>KL University</td>
                    <td>Btech, ECE</td>
                    <td>2019-2023</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>

          <li className='box' id='work'>
            <input type='radio' name='section' id='work-radio' checked />
            <label htmlFor='work-radio'>WORK EXPERIENCE</label>
            <div className='content'>
              <table className='ta'>
                <tbody>
                  <tr>
                    <td>Opentext</td>
                    <td>2023-2024</td>
                    <td>Internship</td>
                  </tr>
                  <tr>
                    <td>CodeAlpha</td>
                    <td>2024-current</td>
                    <td>Internship</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>

          <li className='box' id='skills'>
            <input type='radio' name='section' id='skills-radio' checked />
            <label htmlFor='skills-radio'>SKILLS</label>
            <div className='content'>
              <table className='ta'>
                <tbody>
                  <tr>
                    <td>c</td>
                    <td>Java</td>
                    <td>JavaScript</td>
                  </tr>
                  <tr>
                    <td>HTML</td>
                    <td>CSS</td>
                    <td>React.JS</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>

          <li className='box' id='interests'>
            <input type='radio' name='section' id='interests-radio' checked />
            <label htmlFor='interests-radio'>INTERESTS</label>
            <div className='content'>
              <ul className='hl'>
                <li>Travelling</li>
                <li>Reading Books</li>
                <li>Music</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
