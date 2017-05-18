$(document).ready(function () {
  'use strict';

  var content = [
    {
      title: 'Manage Departments',
      url: 'https://projects.invisionapp.com/d/main#/console/10822833/232987376/preview',
      description: 'Get a full overview over your organization\'s departments'
    },
    {
      title: 'Financials',
      description: 'See how well your organization is doing'
    },
    {
      title: 'Manage Users',
      description: 'Invite, block, delete users'
    },
    {
      title: 'make coffee',
      url: './coffee.html',
      description: 'We will ask Osama to make everyone a cup of coffee'
    },
    {
      title: 'visit website',
      url: 'www.bi.care',
      description: 'Visit our corporate website to get to know more about us and our products'
    },
    {
      title: 'upload data',
      url: 'https://projects.invisionapp.com/d/main#/console/10822833/232987375/preview',
      description: 'Update the system\'s records by uploading a CSV, Excel, or TXT files'
    },
    {
      title: 'create new adhoc chart',
      url: 'https://projects.invisionapp.com/d/main#/console/10822833/230404111/preview',
      description: 'Start a new chart'
    },
    {
      title: 'Invite Users',
      url: 'https://projects.invisionapp.com/d/main#/console/10822833/230330958/preview',
      description: 'Invite users to your organization'
    },
    {
      title: 'View Profile',
      url: 'https://projects.invisionapp.com/d/main#/console/10822833/229436478/preview',
      description: 'Edit your user profile'
    }
  ];

  $('.ui.search').search({
    source: content,
    searchFields: [
      'title'
    ],
    fuzzySearch: true
  });
  
  $('.prompt').on('keydown', function (){
    
    $('.band').css('opacity', '0.5');
    
  });
  
  $('.prompt').on('keyup', function (){
    
    if ($('.prompt').val() == "") {
      $('.band').css('opacity', '1');
    }
    
  });

});
