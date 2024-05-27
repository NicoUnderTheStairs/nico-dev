import Base from '../../_config/base';

class ProjectGrid extends Base {
  constructor(el) {
    super(el);
    const allProjects = [...el.querySelectorAll('.projectGrid__desktop__item')];
    const allProjectsImg = [...el.querySelectorAll('.projectGrid__desktop__img')];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < allProjects.length; i++) {
      const project = allProjects[i];
      // mouse over event
      project.addEventListener('mouseover', () => {
        // if mouse over, remove active class from all other projects
        allProjectsImg.forEach((item) => {
          item.classList.remove('projectGrid__desktop__img--active');
        });
        // add active class to the current project
        allProjectsImg[i].classList.add('projectGrid__desktop__img--active');
      });
    }
  }
}

ProjectGrid.className = 'ProjectGrid';
export default ProjectGrid;
