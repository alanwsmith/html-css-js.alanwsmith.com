const fire_redirect = (location) => {
  return {
    statusCode: 301,
    headers: {
      Location: location,
    },
  }
}

exports.handler = async function (event, context) {
  const files = {
  "2gbdpbawq2ab": "/recipes/javascript_class_example---2gbdpbawq2ab/index.html",
  "2gbiapbo7xxq": "/recipes/detect_enter_keypress_in_an_input_field---2gbiapbo7xxq/index.html",
  "2gbih2r7rted": "/recipes/search_input_example---2gbih2r7rted/index.html",
  "2gbil3x471fa": "/recipes/dynamically_load_external_fonts---2gbil3x471fa/index.html",
  "2gbisklayoew": "/recipes/details_element_example---2gbisklayoew/index.html",
  "2gbiukceyxah": "/recipes/autocomplete_select_menu---2gbiukceyxah/index.html",
  "2gc2v5bvvngh": "/recipes/font_download_test---2gc2v5bvvngh/index.html",
  "2ggjxa4tvm9x": "/recipes/m-dash_input_select_autocomplete_test---2ggjxa4tvm9x/index.html",
  "2gj4p8avxist": "/recipes/strict_selection_menu_form_control---2gj4p8avxist/index.html",
  "2gj6asw5m2bm": "/recipes/web_components_hello_world---2gj6asw5m2bm/index.html",
  "2gja3c8lgfbs": "/recipes/document_onclick_listener_for_web_components---2gja3c8lgfbs/index.html",
  "2gjuqnwy1dko": "/recipes/use_internal_elements_in_a_web_component---2gjuqnwy1dko/index.html",
  "2glvtfmqasay": "/recipes/css_absolute_and_relative_positioning---2glvtfmqasay/index.html",
  "2gmdsyscqjnv": "/recipes/create_and_send_events_in_a_web_component---2gmdsyscqjnv/index.html",
  "2gmvxjjsmlcb": "/recipes/create_a_custom_input_element_in_a_web_component---2gmvxjjsmlcb/index.html",
  "2gn2p9a4zdjr": "/recipes/send_value_with_web_component_form_submit---2gn2p9a4zdjr/index.html",
  "2gn6720koljv": "/recipes/prevent_a_form_from_submitting_to_view_data---2gn6720koljv/index.html",
  "absolute_position_over_letters_2lufjdoqbgt3": "/recipes/absolute_position_over_letters_2lufjdoqbgt3/index.html",
  "apply_styles_to_a_web_component--2Gov695r3d8b": "/recipes/apply_styles_to_a_web_component--2Gov695r3d8b/index.html",
  "back_button_with_history_push_state--2imrt72t8sdv": "/recipes/back_button_with_history_push_state--2imrt72t8sdv/index.html",
  "calculate_color_contrast_ratio--2hhbo0yptnbm": "/recipes/calculate_color_contrast_ratio--2hhbo0yptnbm/index.html",
  "calculate_percentage_difference_between_two_numbers_in_javascript--2hjncmpdqlyx": "/recipes/calculate_percentage_difference_between_two_numbers_in_javascript--2hjncmpdqlyx/index.html",
  "center-a-pre-tag--2i9eqonyasa7": "/recipes/center-a-pre-tag--2i9eqonyasa7/index.html",
  "center-vertically-with-a-header-and-footer--2i9lfclfwj0y": "/recipes/center-vertically-with-a-header-and-footer--2i9lfclfwj0y/index.html",
  "change_content_on_scorll_position_basic_2lbbeuksugnp": "/recipes/change_content_on_scorll_position_basic_2lbbeuksugnp/index.html",
  "change_the_browsers_url_without_reloading_the_page--2hpup1k3l8qz": "/recipes/change_the_browsers_url_without_reloading_the_page--2hpup1k3l8qz/index.html",
  "css_grid__basic_grid--2hzdlrjy0zus": "/recipes/css_grid__basic_grid--2hzdlrjy0zus/index.html",
  "css_grid_columns_2iwlzkz6yki4": "/recipes/css_grid_columns_2iwlzkz6yki4/index.html",
  "css_offset_side_column--2hcgibbj1nwt": "/recipes/css_offset_side_column--2hcgibbj1nwt/index.html",
  "css_two_column_grid_with_scrolling_column--2hz8jc50ad33": "/recipes/css_two_column_grid_with_scrolling_column--2hz8jc50ad33/index.html",
  "detect_key_press_anywhere_on_the_page--2hwzw66hch29": "/recipes/detect_key_press_anywhere_on_the_page--2hwzw66hch29/index.html",
  "double-encode-commas-and-slashes-for-cloudinary-text-overlays--2gc8mwmrfaw7": "/recipes/double-encode-commas-and-slashes-for-cloudinary-text-overlays--2gc8mwmrfaw7/index.html",
  "ffmpeg_webp_samples_2j1ofgslrwmd": "/recipes/ffmpeg_webp_samples_2j1ofgslrwmd/index.html",
  "get_all_elements_with_ids_2kvelm7wowgn": "/recipes/get_all_elements_with_ids_2kvelm7wowgn/index.html",
  "get_attributes_in_a_web_component--2gpiyozzemey": "/recipes/get_attributes_in_a_web_component--2gpiyozzemey/index.html",
  "hex-to-rgb-and-hsl_2kvdcom4x8gt": "/recipes/hex-to-rgb-and-hsl_2kvdcom4x8gt/index.html",
  "hsl_color_picker_web_component--2GoGrtBoU6u3": "/recipes/hsl_color_picker_web_component--2GoGrtBoU6u3/index.html",
  "hsl_to_rgb_conversion_formula--2gqeuz8gn8fv": "/recipes/hsl_to_rgb_conversion_formula--2gqeuz8gn8fv/index.html",
  "html_canvas_draw_rectangle_2iz9dtmla7to": "/recipes/html_canvas_draw_rectangle_2iz9dtmla7to/index.html",
  "html_canvas_simulate_an_animated_gif_2iythtpjmuhh": "/recipes/html_canvas_simulate_an_animated_gif_2iythtpjmuhh/index.html",
  "html_input_range_type_with_floating_point_number--2itkxa97ogoe": "/recipes/html_input_range_type_with_floating_point_number--2itkxa97ogoe/index.html",
  "live_code_codes_maker_experiment_alpha--2gxv4l6iyo7v": "/recipes/live_code_codes_maker_experiment_alpha--2gxv4l6iyo7v/index.html",
  "step_by_step_code_example_prototype_v01_2l9acthsgjbc": "/recipes/step_by_step_code_example_prototype_v01_2l9acthsgjbc/index.html",
  "step_by_step_code_example_prototype_v02_2l9rj2dlz1yn": "/recipes/step_by_step_code_example_prototype_v02_2l9rj2dlz1yn/index.html",
  "step_by_step_code_example_prototype_v03_2la5nzy6th6j": "/recipes/step_by_step_code_example_prototype_v03_2la5nzy6th6j/index.html",
  "step_by_step_code_example_prototype_v04_2ladxbnu5kld": "/recipes/step_by_step_code_example_prototype_v04_2ladxbnu5kld/index.html",
  "step_by_step_code_example_prototype_v05_2lchayo7mlia": "/recipes/step_by_step_code_example_prototype_v05_2lchayo7mlia/index.html",
  "step_by_step_code_example_prototype_v06_2lntj79svqys": "/recipes/step_by_step_code_example_prototype_v06_2lntj79svqys/index.html",
  "step_by_step_code_example_prototype_v07_2lr7pw7xnlyk": "/recipes/step_by_step_code_example_prototype_v07_2lr7pw7xnlyk/index.html",
  "step_by_step_code_example_prototype_v08_2ltx2ia1cxoc": "/recipes/step_by_step_code_example_prototype_v08_2ltx2ia1cxoc/index.html",
  "step_by_step_code_example_prototype_v09_2lyhviicetxn": "/recipes/step_by_step_code_example_prototype_v09_2lyhviicetxn/index.html",
  "step_by_step_code_example_prototype_v10_2lzeojfe8eih": "/recipes/step_by_step_code_example_prototype_v10_2lzeojfe8eih/index.html",
  "step_by_step_code_example_prototype_v11_2lzsw7a1hdhf": "/recipes/step_by_step_code_example_prototype_v11_2lzsw7a1hdhf/index.html",
  "step_by_step_code_example_prototype_v12_scrolling_2lbq1ufz2bpv": "/recipes/step_by_step_code_example_prototype_v12_scrolling_2lbq1ufz2bpv/index.html",
  "step_by_step_code_example_prototype_v13_scroll_event_2lcpt7jgbnza": "/recipes/step_by_step_code_example_prototype_v13_scroll_event_2lcpt7jgbnza/index.html",
  "step_by_step_code_example_prototype_v14_2ld2osyrqfeu": "/recipes/step_by_step_code_example_prototype_v14_2ld2osyrqfeu/index.html",
  "step_by_step_code_example_prototype_v15_2ld4ufohtd4z": "/recipes/step_by_step_code_example_prototype_v15_2ld4ufohtd4z/index.html",
  "step_by_step_code_example_prototype_v16_2lefri4smsti": "/recipes/step_by_step_code_example_prototype_v16_2lefri4smsti/index.html",
  "sticky-code-area_2lzzuqaxn54f": "/recipes/sticky-code-area_2lzzuqaxn54f/index.html",
  "stream-chat-crt-overlay_2kusi3saawnj": "/recipes/stream-chat-crt-overlay_2kusi3saawnj/index.html",
  "svg_masked_image_2mnwqufj5flv": "/recipes/svg_masked_image_2mnwqufj5flv/index.html",
  "system-dark-mode-preference--2icsgti1btei": "/recipes/system-dark-mode-preference--2icsgti1btei/index.html",
  "use_mutation_observers_between_web_components_and_parent_pages--2gxzzx78txjy": "/recipes/use_mutation_observers_between_web_components_and_parent_pages--2gxzzx78txjy/index.html"
}
  const url_parts = event.path.split('/')
  // console.log(url_parts)
  if (url_parts.length !== 4) {
    // console.log('1')
    return fire_redirect('/')
  } else {
    // console.log('2')
    const slug_parts = url_parts[2].split('--')
    if (slug_parts.length !== 2) {
      // console.log('3')
      return fire_redirect('/')
    } else {
      const key = slug_parts[1]
      if (files[key]) {
        // console.log('hit')
        return fire_redirect(files[key])
      } else {
        // console.log('4')
        return fire_redirect('/')
      }
    }
  }

  return fire_redirect('/')
}
