
<template>
    <div>
        <BANNERFO></BANNERFO>
        <div class="page-content">
            <div class="container">
                <div class="row">
                    <aside class="col-md-3 aside aside-left">
                        <ul class="aside-widgets">
                            <!-- .widget.widget-text start -->
                            <li class="widget widget-text">
                                <div class="title">
                                    <h3>Nous contacter</h3>
                                </div>

                                <img src="img/pics/locations.jpg" alt="contact us"/>

                                <br />

                                <p>
                                    Let us know what can we do for you. Contact 
                                    us today!
                                </p>

                                <NuxtLink to="/contact" class="read-more">
                                    <span>
                                        Nous contacter
                                        <i class="fa fa-chevron-right"></i>
                                    </span>
                                </NuxtLink>
                            </li><!-- .widget-text end -->
                        </ul><!-- .aside-widgets end -->
                    </aside><!-- .aside.aside-left end -->

                    <div class="col-md-9">                        
                        <div class="custom-heading">
                            <h2>want to become our driver?</h2>
                        </div>

                        <img class="float-right" src="img/pics/img25.jpg" width="360" alt=""/>

                        <p>
                            I throw myself down among the tall grass by the 
                            trickling stream; and, as I lie close to the earth,
                            a thousand unknown plants are noticed by me: when I 
                            hear the buzz of the little world among the stalks, 
                            and grow familiar with the countless indescribable 
                            forms of the insects and flies, then I feel the 
                            presence of the Almighty, who formed us in his own 
                            image, and the breath.
                            On the other hand, we denounce with righteous
                            indignation and dislike men who are so beguiled and 
                            demoralized by the charms of pleasure of the moment, 
                            so blinded by desire, that they cannot foresee the 
                            pain and trouble that are bound to ensue; and equal 
                            blame belongs to those who fail in their duty.
                        </p>

                        <br />


                        <form class="wpcf7 driver-app-form clearfix">
                            <fieldset>
                                <label><span class="required">*</span> Driver first name:</label>

                                <input type="text" class="wpcf7-text" id="driver-name">
                            </fieldset>

                            <fieldset>
                                <label><span class="required">*</span> Driver last name:</label>

                                <input type="text" class="wpcf7-text" id="driver-last-name">
                            </fieldset>

                            <fieldset>
                                <label><span class="required">*</span> Driver last name:</label>

                                <input type="text" class="wpcf7-text" id="driver-date-birth" placeholder="mm/dd/yy">
                            </fieldset>

                            <fieldset>
                                <label><span class="required">*</span> You are:</label>

                                <select class="wpcf7-select" id="driver-type">
                                    <option value="Owner">Owner</option>
                                    <option value="Company driver">Company driver</option>
                                </select>
                            </fieldset>

                            <fieldset>
                                <label><span class="required">*</span> Driver's license date issued:</label>

                                <input class="wpcf7-text" id="driver-licence-period">
                            </fieldset>

                            <fieldset>
                                <label><span class="required">*</span> Type of driver's licence:</label>

                                <input class="wpcf7-text" id="driver-licence-type">
                            </fieldset>

                            <fieldset>
                                <label><span class="required">*</span> Your phone number:</label>

                                <input class="wpcf7-text" id="driver-phone">
                            </fieldset>

                            <fieldset>
                                <label><span class="required">*</span> Your cell number:</label>

                                <input class="wpcf7-text" id="driver-cell">
                            </fieldset>

                            <fieldset>
                                <label><span class="required">*</span> Years of experience:</label>

                                <input class="wpcf7-text" id="driver-experience" placeholder="Minimum 3...">
                            </fieldset>

                            <input type="submit" class="wpcf7-submit" value="apply now">
                        </form><!-- .wpcf7 end -->

                        <div class="col-md-12 mt-5">
                            <div class="table-responsive">
                                <table class="table">
                                    <caption class="mt-2">packaging options table</caption>

                                    <thead>
                                        <tr>
                                            <th>package size</th>
                                            <th>small</th>
                                            <th>medium</th>
                                            <th>large</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>Package dimensions</td>
                                            <td>120 x 150 x 178</td>
                                            <td>120 x 150 x 178</td>
                                            <td>120 x 150 x 178</td>
                                        </tr>

                                        <tr>
                                            <td>Weight</td>
                                            <td>35 kg</td>
                                            <td>45kg</td>
                                            <td>65kg</td>
                                        </tr>

                                        <tr>
                                            <td>Capacity</td>
                                            <td>approx 158 units of textile</td>
                                            <td>approx 258 units of textile</td>
                                            <td>approx 258 units of textile</td>
                                        </tr>
                                    </tbody>
                                </table><!-- .table end -->
                            </div><!-- .table-responsive end -->
                        </div>
                    </div><!-- .col-md-9 end -->
                </div><!-- .row end -->
            </div><!-- .container end -->
        </div><!-- .page-content end -->  
    </div>
</template>

<script>
import BANNERFO from "../components/bannerFo.vue";

export default {
    name:'Devis',
    layout:'frontLayout',
    head: {
        title: "Transnet -  Devis",
    },
    components: {
      BANNERFO,
    },
}
</script>