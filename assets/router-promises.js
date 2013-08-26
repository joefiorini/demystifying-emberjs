return RSVP.resolve().then(handleAbort)
                     .then(beforeModel)
                     .then(handleAbort)
                     .then(model)
                     .then(handleAbort)
                     .then(afterModel)
                     .then(handleAbort)
                     .then(proceed)
                     .then(null, handleError);
