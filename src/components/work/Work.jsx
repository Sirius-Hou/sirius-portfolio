import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import './Work.css';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { IoIosClose } from 'react-icons/io';
import christieImg from '../../assets/work/christie2.jpg';
import fordImg from '../../assets/work/ford1.jpg';
import bhvrImg from '../../assets/work/bhvr2.jpg';
import uwImg from '../../assets/work/uw1.jpg';

const Work = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [closing, setClosing] = useState(false);

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

  const modalsContent = [
    {
      title: "Christie Digital Systems",
      subtitle: "Application Software Developer (C++)",
      period: "Sep 2024 - Present",
      text: [
        "Developed a black level correction algorithm with MATLAB to address brightness and color inconsistencies in laser projectors; Integrated into Hawkeye calibration software using C++ and Qt framework, improving the color accuracy by over 50%.",
        "Enhanced Hawkeye’s web UI using JavaScript to add dynamic control sliders for real-time RGB adjustments, streamlined the calibration process and significantly improved user experience. (client commented 'intuitive and convenient to use')"
      ]
    },
    {
      title: "Ford Motor Company",
      subtitle: "Software Developer (Data Collection Platform)",
      period: "Jan 2024 - Apr 2024",
      text: [
        "Maintained codebase for FNV4 Data Collection Platform using C++, improved integration with real-time signal processing systems.",
        "Developed a multi-threaded data ingestion service that optimized data flow from vehicle sensors, reduced processing latency by 23%.",
        "Built a robust testing framework using Google Test and Google Mock, covering over 90% of the platform’s core modules and ensuring stability during the transition from FNV3 to FNV4 architectures."
      ]
    },
    {
      title: "Behaviour Interactive",
      subtitle: "Software Engineer (Unreal Engine Tool Dev)",
      period: "May 2023 - Aug 2023",
      text: [
        "Developed Unreal Engine components using C++ for real-time, in-editor actor collision detection with customizable visual indicators, allowing designers to visualize collisions without launching the game, streamlined level design and boosted team productivity by ~40%.",
        "Optimized a custom Unreal Engine plugin (Tile Editor) to automate the conversion of over 700 game scene tiles from blueprints to levels, supporting advanced foliage editing, saving over 100 hours of manual work and boosting design team efficiency by ~30%."
      ]
    },
    {
      title: "University of Waterloo",
      subtitle: "Instructional Support Assistant",
      period: "Aug 2022 - Dec 2022",
      text: [
        "Performed UI and API quality assurance tests for the Android SES application, identifying and reporting bugs for timely resolution.",
        "Constructed C++ configuration scripts for the auto-grading system (Lint R) to automated assignment assessments and feedback.",
        'Conducted weekly office hours, tutorials, and pre-exam review sessions. (Praised by students as "encouraging and supportive.")'
      ]
    }
  ];

  const openModal = (index) => {
    setActiveModal(index);
  };

  const closeModal = () => {
    setClosing(true);
    setTimeout(() => {
      setActiveModal(null);
      setClosing(false);
    }, 300); // Match with the popOut animation duration
  };

  return (
    <div className="work-section" id="work">
      <div className="shell" id="shell">
        <div className="header">
          <h2 className="title"><strong className="blue">Work Experience</strong></h2>
          <h3 className="subtitle">My Career Path</h3>
        </div>
        <div className="timeline">
          {modalsContent.map((content, index) => (
            <div
              key={index}
              className="item"
              data-text={content.period}
              onClick={() => openModal(index)}
            >
              <div className="content">
                <img src={[christieImg, fordImg, bhvrImg, uwImg][index]} alt="Experience" className="img" />
                <h2 className="content-title">{content.title}</h2>
                <p className="content-desc">{content.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeModal !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className={`modal-content ${closing ? 'closing' : ''}`} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <IoIosClose />
            </button>
            <h2 className="modal-title">{modalsContent[activeModal]?.title}</h2>
            <h3 className="modal-subtitle">{modalsContent[activeModal]?.subtitle}</h3>
            <div className="modal-bullet-container">
              {modalsContent[activeModal]?.text.map((item, idx) => (
                <div key={idx} className="modal-bullet">
                  <div className="bullet-icon-container">
                    <MdOutlineKeyboardArrowRight className="bullet-icon" />
                  </div>
                  <div className="bullet-text">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;
