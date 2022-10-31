import createError from 'http-errors';
import Joi from 'joi';

const checkEventInfo = async (req, _res, next) => {
  try {
    const eventSchema = Joi.object({
      eventName: Joi.string(),
      description: Joi.string(),
      location: Joi.string(),
      minParticipants: Joi.number().integer(),
      startDate: Joi.date(),
      startTime: Joi.date(),
      duration: Joi.number().integer(),
      requiresMinParticipants: Joi.bool(),
      officeId: Joi.number().integer(),
    });

    await eventSchema.validateAsync(req.body);
    next();
  } catch (err) {
    const error = createError(400, (err as any).details);
    next(error);
  }
};

export default checkEventInfo;
