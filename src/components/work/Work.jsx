import React, { useEffect } from 'react';
import $ from 'jquery';
import './Work.css';
import christieImg from '../../assets/work/christie1.jpg';
import fordImg from '../../assets/work/ford1.jpg';
import bhvrImg from '../../assets/work/bhvr2.jpg';
import uwImg from '../../assets/work/uw1.jpg';

const Work = () => {
  useEffect(() => {
    // Function to check if an element is in the viewport
    function isInViewport(element) {
      const elementTop = $(element).offset().top;
      const elementBottom = elementTop + $(element).outerHeight();
      const viewportTop = $(window).scrollTop();
      const viewportFourFifth = viewportTop + ($(window).height() / 5) * 4;

      return elementBottom > viewportTop && elementTop < viewportFourFifth;
    }

    (function ($) {
      $.fn.timeline = function () {
        const selectors = {
          id: $(this),
          item: $(this).find('.item'),
          activeClass: 'item--active',
          img: '.img'
        };

        // Activate the first timeline item and set background image
        selectors.item.eq(0).addClass(selectors.activeClass);
        const firstImgSrc = selectors.item.first().find(selectors.img).attr('src');
        selectors.id.css('background-image', `url(${firstImgSrc})`);

        // Scroll event handler
        $(window).on('scroll', function () {
          selectors.item.each(function () {
            if (isInViewport(this)) {
              $(this).addClass(selectors.activeClass);
              const currImgSrc = $(this).find(selectors.img).attr('src');
              selectors.id.css('background-image', `url(${currImgSrc})`);
            } else {
              $(this).removeClass(selectors.activeClass);
            }
          });
        });

        // Hover event handler
        selectors.item.on('mouseenter', function () {
          selectors.item.removeClass(selectors.activeClass);
          $(this).addClass(selectors.activeClass);
          const currImgSrc = $(this).find(selectors.img).attr('src');
          selectors.id.css('background-image', `url(${currImgSrc})`);
        });

        selectors.item.on('mouseleave', function () {
          // Reset to the original scroll behavior
          $(window).trigger('scroll');
        });

        // Trigger scroll event to activate visible items on load
        $(window).trigger('scroll');
      };
    })($);

    // Initialize the timeline
    $('#shell').timeline();
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="shell" id="shell">
        <div className="header">
          <h2 className="title"><strong className="blue">Work Experience</strong></h2>
          <h3 className="subtitle">My Career Path</h3>
        </div>
        <div className="timeline">
          <div className="item" data-text="Sep 2024 - Present">
            <div className="content">
              <img src={christieImg} alt="Experience" className="img" />
              <h2 className="content-title">Christie Digital Systems</h2>
              <p className="content-desc">Application Software Developer (C++)</p>
            </div>
          </div>

          <div className="item" data-text="Ford Company of Canada Limited">
            <div className="content">
              <img src={fordImg} alt="Experience" className="img" />
              <h2 className="content-title">Ford Motor</h2>
              <p className="content-desc">Software Developer (Data Collection Platform)</p>
            </div>
          </div>

          <div className="item" data-text="Behaviour Interactive">
            <div className="content">
              <img src={bhvrImg} alt="Experience" className="img" />
              <h2 className="content-title">Behaviour Interactive</h2>
              <p className="content-desc">Software Engineer (Unreal Engine Tool Dev)</p>
            </div>
          </div>

          <div className="item" data-text="University of Waterloo">
            <div className="content">
              <img src={uwImg} alt="Experience" className="img" />
              <h2 className="content-title">University of Waterloo</h2>
              <p className="content-desc">Instructional Support Assistant</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
