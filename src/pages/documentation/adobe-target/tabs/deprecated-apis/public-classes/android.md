#### TargetRequest

<InlineAlert variant="warning" slots="text"/>

Using Builder to construct the TargetRequest Object has been deprecated. You should be using constructors instead.

**Example**

```java
public class TargetRequest extends TargetObject {

    /**
    * Builder used to construct a TargetRequest object.
    */
    @Deprecated
    public static class Builder {
        private TargetRequest targetRequest;

        /**
         * Create a TargetRequest Builder.
         *
         * @param mboxName String mbox name for this request
         * @param defaultContent String default content for this request
         */
        @Deprecated
        public Builder(final String mboxName, final String defaultContent);

        /**
         * Set mbox parameters for this request.
         *
         * @param mboxParameters Map<String, String> mbox parameters
         * @return this builder
         */
        public Builder setMboxParameters(final Map<String, String> mboxParameters);

        /**
        * Set order parameters for this request.
        *
        * @param orderParameters Map<String, Object> order parameters
        * @return this builder
        */
        public Builder setOrderParameters(final Map<String, Object> orderParameters);

        /**
         * Set profile parameters for this request.
         *
         * @param productParameters Map<String, String> product parameters
         * @return this builder
         */
        public Builder setProductParameters(final Map<String, String> productParameters);

        /**
         * Set profile parameters for this request.
         *
         * @param profileParameters Map<String, String> profile parameters
         * @return this builder
         */
        public Builder setProfileParameters(final Map<String, Object> profileParameters);

        /**
         * Set Target parameters for this request.
         *
         * @param targetParameters TargetParameters object
         * @return this builder
         */
        public Builder setTargetParameters(final TargetParameters targetParameters);

        /**
        * Set the callback function for this request.
        *
        * @param contentCallback AdobeCallback<String> which will get called with the returning content
        * @return this builder
        */
        public Builder setContentCallback(final AdobeCallback<String> contentCallback);

        /**
         * Build the TargetRequest.
         *
         * @return TargetRequest the target request object
         */
        public TargetRequest build();
    }
}
```

#### TargetPrefetch

<InlineAlert variant="warning" slots="text"/>

Using Builder to construct the TargetPrefetch Object has been deprecated. You should be using constructors instead.

**Example**

```java
public class TargetPrefetch extends TargetObject {

    /**
     * Builder used to construct a TargetPrefetch object
     */
    @Deprecated
    public static class Builder {
        private TargetPrefetch targetPrefetch;

        /**
         * Create a TargetPrefetch Builder.
         *
         * @param mboxName String mbox name for this request
         */
         public Builder(final String mboxName);

        /**
         * Set mbox parameters for this request.
         *
         * @param mboxParameters Map<String, String> mbox parameters
         * @return this builder
         */
         public Builder setMboxParameters(final Map<String, String> mboxParameters);

        /**
         * Set order parameters for this request.
         *
         * @param orderParameters Map<String, String> order parameters
         * @return this builder
         */
         public Builder setOrderParameters(final Map<String, Object> orderParameters);

        /**
         * Set product parameters for this request.
         *
         * @param productParameters Map<String, String> product parameters
         * @return this builder
         */
         public Builder setProductParameters(final Map<String, String> productParameters);

         /**
         * Set profile parameters for this request.
         *
         * @param profileParameters Map<String, String> profile parameters
         * @return this builder
         */
         public Builder setProfileParameters(final Map<String, Object> profileParameters);

        /**
         * Set Target parameters for this request.
         *
         * @param targetParameters TargetParameters object
         * @return this builder
         */
         public Builder setTargetParameters(final TargetParameters targetParameters);

         /**
         * Build and return TargetPrefetch
         *
         * @return TargetPrefetch the target prefetch object
         */
         public TargetPrefetch build();
    }

}
```