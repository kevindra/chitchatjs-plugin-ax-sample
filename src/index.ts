import {
  AlexaDialogContext,
  AlexaEvent,
  ax,
  ssml,
} from "@chitchatjs/alexa";

/**
 * Sample plugin
 */
export namespace sample {
  /**
   * Makes Alexa say something excitedly
   *
   * @param msg input message
   */
  export const speakExcitedly = (msg: string) => {
    return ax.say(
      ax
        .ssml(msg)
        .emotion(ssml.Emotion.excited, ssml.Intensity.high)
        .build()
    );
  };

  /**
   * Makes Alexa say something random.
   * An example of custom logic based plugin.
   */
  export const saySomethingRandom = () => {
    return ax.run().executor((c: AlexaDialogContext, e: AlexaEvent) => {
      let msgList = ["Hello", "Hi", "Welcome"];

      return ax.say(msgList[Math.floor(Math.random() * msgList.length)]);
    });
  };
}
