<template>
<!-- Page content-->
<section class="py-5">
    <div class="container px-5">
        Welcome to {{info.profile.name}}'s Web Developer Portfolio!

        By accessing or using {{info.profile.name}}'s Web Developer Portfolio website, you agree to comply with and be bound by the following terms and conditions of use. Please read these terms carefully before using the website. If you disagree with any part of these terms, please do not use this website.
<br>
<br>
        <b>1. Use of Website</b>
        <ul>
            <li>

                The content of the pages of this website is for your general information and use only. It is subject to change without notice.
            </li>
            <li>

                Your use of any information or materials on this website is entirely at your own risk, for which {{info.profile.name}} shall not be liable.
            </li>
            <li>

                This website may include links to other websites. These links are provided for your convenience to provide further information. They do not signify that {{info.profile.name}} endorses the website(s). {{info.profile.name}} has no responsibility for the content of the linked website(s).
            </li>
        </ul>
        <b>
            2. Intellectual Property
        </b>
<li>

    All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of {{info.profile.name}} or its content suppliers and is protected by international copyright laws. The compilation of all content on this site is the exclusive property of {{info.profile.name}} and is protected by international copyright laws.
</li>
        <b>

            3. Limitations
        </b>
<li>

    In no event shall {{info.profile.name}} be liable for any damages arising out of the use or inability to use the materials on {{info.profile.name}}'s Web Developer Portfolio, even if {{info.profile.name}} or an authorized representative has been notified orally or in writing of the possibility of such damage.
</li>
        <b>

            4. Privacy Policy
        </b>
<li>

    {{info.profile.name}} respects the privacy of its users. Please refer to our Privacy Policy for information on how we collect, use, and disclose personal information.
</li>
        <b>

            5. Governing Law
        </b>
<li>

    These terms and conditions are governed by and construed in accordance with the laws of Nigeria, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
    By using this website, you signify your acceptance of these terms of service. If you do not agree to these terms, please refrain from using the website.
</li>

        {{info.profile.name}} reserves the right to modify these terms of service at any time. It is your responsibility to review these terms periodically for changes. Your continued use of the website following the posting of changes will signify your acceptance of those changes.
    </div>
</section>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import info from '../assets/utils/info';
import { ITStore, ITProps } from '../interface';


export default defineComponent({

    name: 'TermsOfService',
    props: {
    navigation: {
      type: String as PropType<ITProps['navigation']>,
      required: true,
    },
  },
  methods: {
      changeNavigation(newNavigation: ITStore['navigation']){
        this.$emit('change-navigation', newNavigation);
      }
  },
    data() {
        return ({
            info
        })
    },

})
info
</script>