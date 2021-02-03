import C from '../constans'

export const createCourseAction = course => ({
    type: C.CREATE_COURSE,
    payload: course,
})
